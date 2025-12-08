const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333";

export interface ApiError {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
}

export class ApiClientError extends Error {
  constructor(message: string, public status?: number, public errors?: Record<string, string[]>) {
    super(message);
    this.name = "ApiClientError";
  }
}

export interface RequestOptions extends RequestInit {
  token?: string;
}

export async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { token, ...fetchOptions } = options;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...fetchOptions.headers,
  };

  if (token) {
    // @ts-ignore
    headers["Authorization"] = `Bearer ${token}`;
  }

  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: `Erro na requisição: ${response.status}`,
      }));

      throw new ApiClientError(
        errorData.message || `Erro na requisição: ${response.status}`,
        response.status,
        errorData.errors
      );
    }

    // Se a resposta for 204 (No Content), retorna null
    if (response.status === 204) {
      return null as T;
    }

    const data = await response.json();
    return data.data as T;
  } catch (error) {
    if (error instanceof ApiClientError) {
      throw error;
    }

    throw new ApiClientError(error instanceof Error ? error.message : "Erro de conexão com o servidor");
  }
}

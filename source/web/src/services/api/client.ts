const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333";

export interface ApiError {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
}

export interface RequestOptions extends RequestInit {
  token?: string;
}

export type Return<T> =
  | { data?: T; message: string; status: number }
  | { data: T; message?: string; status?: number }
  | { data: null; message?: string; status?: number };

export async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<Return<T>> {
  const { token, ...fetchOptions } = options;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...fetchOptions.headers,
  };

  if (token) {
    // @ts-expect-error não encontra a propriedade Authorization
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

      return {
        message: errorData.message || `Erro na requisição: ${response.status}`,
        status: response.status,
      };
    }

    // Se a resposta for 204 (No Content), retorna null
    if (response.status === 204) {
      return { data: null, message: "No Content", status: 204 };
    }

    const data = await response.json();
    return { data: data.data };
  } catch (error) {
    return { message: error instanceof Error ? error.message : "Erro de conexão com o servidor", status: 500 };
  }
}

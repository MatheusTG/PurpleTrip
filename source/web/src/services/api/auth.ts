const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333";

export interface LoginResponse {
  data: {
    token: string;
    user: {
      id: string;
      email: string;
      name?: string;
    };
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Erro ao fazer login" }));
    throw new Error(error.message || "Erro ao fazer login");
  }

  return response.json();
}

export interface RegisterData {
  name: string;
  lastName: string;
  phone: string;
  birthDate: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: string;
  email: string;
  name: string;
  lastName: string;
  phone: string;
  birthDate: string;
}

export async function register(data: RegisterData): Promise<RegisterResponse> {
  const response = await fetch(`${API_BASE_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Erro ao criar conta" }));
    throw new Error(error.message || "Erro ao criar conta");
  }

  return response.json();
}

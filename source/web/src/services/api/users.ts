import { UpdateUserData, User } from "@/@types/user.types";
import { getToken } from "@/utils/auth";
import { apiClient, Return } from "./client";

export interface RegisterData {
  name: string;
  lastName: string;
  phone: string;
  birthDate: string;
  email: string;
  password: string;
}

export async function register(data: RegisterData): Promise<Return<User>> {
  return apiClient<User>("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getAllUsers(): Promise<Return<User[]>> {
  const token = getToken();
  return apiClient<User[]>("/api/users", {
    method: "GET",
    token: token || undefined,
  });
}

export async function getUser(userId: string): Promise<Return<User>> {
  const token = getToken();
  return apiClient<User>(`/api/users/${userId}`, {
    method: "GET",
    token: token || undefined,
  });
}
export async function updateUser(userId: string, data: UpdateUserData): Promise<Return<User>> {
  const token = getToken();
  return apiClient<User>(`/api/users/${userId}`, {
    method: "PUT",
    body: JSON.stringify(data),
    token: token || undefined,
  });
}

export async function deleteUser(userId: string): Promise<Return<void>> {
  const token = getToken();
  return apiClient<void>(`/api/users/${userId}`, {
    method: "DELETE",
    token: token || undefined,
  });
}

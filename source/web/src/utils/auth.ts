import { User } from "@/@types/user.types";

export function logout() {
  // Remove token do cookie (é pra funcionar com o middleware)
  document.cookie = "token=; path=/; max-age=0";

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "/login";
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

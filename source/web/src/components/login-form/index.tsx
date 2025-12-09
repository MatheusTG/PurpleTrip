"use client";

import { login } from "@/services/api/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "./login-form.module.css";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await login({ email, password });

      // Armazena o token em cookie ("para o middleware")
      document.cookie = `token=${response.data.token}; path=/; max-age=${60 * 60 * 24 * 7}`;

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      const params = new URLSearchParams(window.location.search);
      const redirect = params.get("redirect") || "/";

      router.push(redirect);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao fazer login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.divInput}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="purpletrip@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
      </div>
      <div className={styles.divInput}>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.input}
          placeholder="**********"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
      </div>
      <p>
        Não possui uma conta?{" "}
        <Link className={styles.cadastro} href="/register">
          Cadastre-se
        </Link>
      </p>
      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}

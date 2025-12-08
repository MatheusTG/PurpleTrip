"use client";

import { register } from "@/services/api/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "./register-form.module.css";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validatePassword(password: string, verifyPassword: string) {
    return password === verifyPassword;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!validatePassword(password, verifyPassword)) {
      setError("As senhas não coincidem");
      return;
    }

    setIsLoading(true);

    try {
      await register({
        name,
        lastName,
        phone,
        birthDate,
        email,
        password,
      });

      router.push("/login?registered=true");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao criar conta");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.divNomeSobrenome}>
        <div className={styles.divInput}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            disabled={isLoading}
            className={styles.input}
          />
        </div>
        <div className={styles.divInput}>
          <label htmlFor="lastName">Sobrenome</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
            disabled={isLoading}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.divInput}>
        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          disabled={isLoading}
          className={styles.input}
        />
      </div>
      <div className={styles.divInput}>
        <label htmlFor="birthDate">Data de nascimento</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={birthDate}
          onChange={e => setBirthDate(e.target.value)}
          required
          disabled={isLoading}
          className={styles.input}
        />
      </div>
      <div className={styles.divInput}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className={styles.input}
        />
      </div>
      <div className={styles.divInput}>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          disabled={isLoading}
          className={styles.input}
        />
      </div>
      <div className={styles.divInput}>
        <label htmlFor="passwordVerify">Confirmar senha</label>
        <input
          type="password"
          id="passwordVerify"
          name="passwordVerify"
          value={verifyPassword}
          onChange={e => setVerifyPassword(e.target.value)}
          required
          disabled={isLoading}
          className={styles.input}
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? "Registrando..." : "Registrar"}
      </button>
      <p>
        Já possui uma conta?{" "}
        <Link href="/login" className={styles.login}>
          Entrar
        </Link>
      </p>
    </form>
  );
}

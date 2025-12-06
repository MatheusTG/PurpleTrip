"use client";

import { use, useState } from "react";
import styles from "./register-form.module.css";

export default function RegisterForm() {
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  function validatePassword(password: string, verifyPassword: string) {
    return password === verifyPassword;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validatePassword(password, verifyPassword)) {
      alert("Senhas diferentes");
    }
  }

  return (
    <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.divNomeSobrenome}>
        <div className={styles.divInput}>
          <label htmlFor="text">Nome</label>
          <input type="text" id="name" name="name" className={styles.input} />
        </div>
        <div className={styles.divInput}>
          <label htmlFor="text">Sobrenome</label>
          <input type="text" id="text" name="text" className={styles.input} />
        </div>
      </div>
      <div className={styles.divInput}>
        <label htmlFor="tel">Telefone</label>
        <input type="tel" id="tel" name="tel" className={styles.input} />
      </div>
      <div className={styles.divInput}>
        <label htmlFor="date">Data de nascimento</label>
        <input type="date" id="date" name="date" className={styles.input} />
      </div>
      <div className={styles.divInput}>
        <label htmlFor="date">E-mail</label>
        <input type="email" id="email" name="email" className={styles.input} />
      </div>
      <div className={styles.divInput}>
        <label htmlFor="date">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.divInput}>
        <label htmlFor="date">Confirmar senha</label>
        <input
          type="password"
          id="passwordVerify"
          name="passwordVerify"
          value={verifyPassword}
          className={styles.input}
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.button}>
        Entrar
      </button>
    </form>
  );
}

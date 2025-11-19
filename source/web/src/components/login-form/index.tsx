import Link from "next/link";
import styles from "./login-form.module.css";

export default function LoginForm() {
  return (
    <form className={styles.container}>
      <div className={styles.divInput}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="purpletrip@email.com"
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
        />
      </div>
      <p>
        Não possui uma conta?{" "}
        <Link className={styles.cadastro} href="">
          Cadastre-se
        </Link>
      </p>
      <button type="submit" className={styles.button}>
        Entrar
      </button>
    </form>
  );
}

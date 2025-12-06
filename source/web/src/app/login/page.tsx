import LoginForm from "@/components/login-form";
import Image from "next/image";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Image
        src="/img/decoration-image.jpg"
        width={960}
        height={1080}
        alt="oi"
        className={styles.image}
      />
      <div className={styles.containerForm}>
        <div className={styles.logo}>
          <Image src="/img/logo.png" width={190} height={74} alt="logo" />
          <p className={styles.legenda}>Seu conforto está aqui</p>
        </div>
        <LoginForm />
        <div className={styles.containerMidias}>
            <p className={styles.texto}>Entre com</p>
            <div className={styles.midias}>
                <Image src="/img/google-icon.png" width={36} height={36} alt="google" />
                <Image src="/img/facebook-icon.png" width={36} height={36} alt="facebook" />
                <Image src="/img/apple-icon.png" width={36} height={36} alt="apple" />  
            </div>
        </div>
      </div>
    </div>
  );
}

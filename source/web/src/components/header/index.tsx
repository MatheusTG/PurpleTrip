import styles from "./header.module.css";
import Image from "next/image";
import { MessageCircleQuestionMark } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerPrincipal}>
        <div className={styles.coluna}>
          <Image src="/logo.png" alt="Logo" width={173} height={64} />
        </div>

        <div className={styles.coluna2}>
          <Link href="#" type="button" className={styles.ajuda}>
            <MessageCircleQuestionMark size={24} color="#2e2e2e" />
            <span>Ajuda</span>
          </Link>

          <Link href="#" type="button" className={styles.ajuda}>
            <Image
              src="/profile-image.jpg"
              alt=""
              width={36}
              height={36}
              className={styles.usuario}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  const isAuthPage = ["/login", "/register"].includes(pathname);

  if (isAuthPage) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerPrincipal}>
        <div className={styles.coluna}>
          <Image src="/logo.png" alt="Logo" width={186} height={72} />
          <div className={styles.midias}>
            <Image src="/facebook-image.svg" alt="" width={30} height={30} />
            <Image src="/instagram-image.svg" alt="" width={30} height={30} />
            <Image src="/whatsapp-image.svg" alt="" width={30} height={30} />
          </div>
        </div>
        <div className={styles.coluna}>
          <h3 className={styles.titulo}>Mapa do Site</h3>
          <nav className={styles.links}>
            <Link href="#" className={styles.botao}>
              Quartos
            </Link>
            <Link href="#" className={styles.botao}>
              Promoções
            </Link>
            <Link href="#" className={styles.botao}>
              Taxis
            </Link>
            <Link href="#" className={styles.botao}>
              Malas
            </Link>
            <Link href="#" className={styles.botao}>
              Passeios
            </Link>
          </nav>
        </div>
        <div className={styles.coluna}>
          <Image src="/buildings.svg" alt="Predios" width={260} height={260} className={styles.predios} />
        </div>
      </div>

      <p className={styles.texto}>PurpleTrip © Todos os direitos reservados</p>
    </footer>
  );
}

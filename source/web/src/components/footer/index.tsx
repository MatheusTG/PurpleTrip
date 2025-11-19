import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerPrincipal}>
        <div className={styles.coluna}>
          <Image src="/logo.png" alt="Logo" width={186} height={72} />
          <div className={styles.midias}>
            <Image src="/facebook-image.svg" alt="" width={40} height={40} />
            <Image src="/instagram-image.svg" alt="" width={40} height={40} />
            <Image src="/whatsapp-image.svg" alt="" width={40} height={40} />
          </div>
        </div>
        <div className={styles.coluna}>
          <h3 className={styles.titulo}>Mapa do Site</h3>
          <nav className={styles.links}>
            <Link href="#" className={styles.botao}>Quartos</Link>
            <Link href="#" className={styles.botao}>Promoções</Link>
            <Link href="#" className={styles.botao}>Taxis</Link>
            <Link href="#" className={styles.botao}>Malas</Link>
            <Link href="#" className={styles.botao}>Passeios</Link>
          </nav>
        </div>
        <div className={styles.coluna}>
          <Image
            src="/buildings.svg"
            alt="Predios"
            width={260}
            height={260}
            className={styles.predios}
          />
        </div>
      </div>

      <p className={styles.texto}>PurpleTrip © Todos os direitos reservados</p>
    </footer>
  );
}

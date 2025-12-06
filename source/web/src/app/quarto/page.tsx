import Image from "next/image";
import styles from "./page.module.css";
import DetalhesQuarto from "@/components/detalhes-quarto";

export default function QuartoPage() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src="/hotel-image.png"
          width={1280}
          height={341}
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.detalhes}>
        <DetalhesQuarto />
      </div>
    </div>
  );
}

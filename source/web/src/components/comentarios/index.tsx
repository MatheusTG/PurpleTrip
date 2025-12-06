import { Star } from "lucide-react";
import styles from "./comentarios.module.css";

export default function Comentario() {
  return (
    <div className={styles.card}>
      <img
        src="/profile-image.jpg"   
        alt="Foto do hóspede"
        className={styles.foto}
      />

      <div>
        <div className={styles.topo}>
          <p className={styles.nome}>Amanda</p>

          <div className={styles.estrelas}>
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
          </div>
        </div>

        <p className={styles.texto}>
          O apartamento é exatamente como nas fotos: limpo, aconchegante e muito bem localizado. Fiquei por 4 dias e tive uma ótima experiência. A cama era confortável, o chuveiro funcionava bem e o Wi-Fi era rápido. 
        </p>
      </div>
    </div>
  );
}

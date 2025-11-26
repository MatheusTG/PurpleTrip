import { AirVent, Coffee, Star, Wifi } from "lucide-react";
import styles from "./detalhes-quarto.module.css";

export default function DetalhesQuarto() {
  return (
    <div className={styles.container}>
      <div className={styles.linha}>
        <span className={styles.span}>
          1 quarto • 2 hóspedes • 1 cama • 1 banheiro
        </span>
        <button className={styles.button}>Chat com o proprietário</button>
      </div>
      <p className={styles.titulo}>Título do quarto</p>
      <p className={styles.localizacao}>Campo Mourão, Brasil</p>
      <div className={styles.estrelasContainer}>
        <p>
          <Star /> <Star /> <Star /> <Star /> <Star />
        </p>
        <p className={styles.avaliacoes}>159 avaliações</p>
      </div>

      <div>
        <p className={styles.descricao}>Descrição</p>
        <p className={styles.paragrafo}>
          Condomínio fechado com apartamentos modernos, área de lazer com salão
          de festas, playground e churrasqueira. Localizado em região tranquila
          e de fácil acesso.
        </p>
      </div>
      <div className={styles.comodidades}>
        <p className={styles.comodidade}>
          <Wifi className={styles.item} />
          Wifi
        </p>
        <p className={styles.comodidade}>
          <AirVent className={styles.item} /> Ar-condicionado
        </p>
        <p className={styles.comodidade}>
          <Coffee className={styles.item} /> Café da manhã
        </p>
      </div>
    </div>
  );
}

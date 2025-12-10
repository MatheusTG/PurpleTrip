"use client";

import { AirVent, Coffee, Wifi } from "lucide-react";
import styles from "./detalhes-quarto.module.css";
import Comentario from "../comentarios";
import Stars, { StarsAmount } from "@/components/stars";
import { useState } from "react";
import MapaEstatico from "../mapa";

export default function DetalhesQuarto() {
  const [nota, setNota] = useState<StarsAmount>(5);

  return (
    <div className={styles.container}>
      <div className={styles.linha}>
        <span className={styles.span}>1 quarto • 2 hóspedes • 1 cama • 1 banheiro</span>
        <button className={styles.button}>Chat com o proprietário</button>
      </div>

      <p className={styles.titulo}>Título do quarto</p>
      <p className={styles.localizacao}>Campo Mourão, Brasil</p>

      <div className={styles.estrelasContainer}>
        <Stars size={22} starsAmount={nota} setStarsAmount={setNota} />
        <p className={styles.avaliacoes}>159 avaliações</p>
      </div>

      <div className={styles.descricaoContainer}>
        <p className={styles.descricao}>Descrição</p>
        <p className={styles.paragrafo}>
          Condomínio fechado com apartamentos modernos, área de lazer com salão de festas, playground e churrasqueira.
          Localizado em região tranquila e de fácil acesso.
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
      <p className={styles.descricao}>Localização</p>
      <MapaEstatico />
      <div className={styles.avaliacoesContainer}>
        <h3 className={styles.subtitulo}>Avaliações dos Hóspedes</h3>
        <Comentario />
        <Comentario />
      </div>
    </div>
  );
}

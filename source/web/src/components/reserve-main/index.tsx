"use client";

import { User } from "@/@types/user.types";
import { getUser } from "@/utils/auth";
import { Coffee, Fan, Star, Wifi } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./reserve-main.module.css";

export default function ReservaPrincipal() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (() => {
      const u = getUser();
      setUser(u);
    })();
  }, []);

  return (
    <div className={styles.containerPagina}>
      <div className={styles.coluna}>
        <p className={styles.titulo}>Faça sua reserva</p>
        <p className={styles.subtitulo}>Sua viagem</p>

        <div className={styles.informacao}>
          <div className={styles.informacao2}>
            <p className={styles.datas}>Datas</p>
            <p className={styles.dia}>08 - 15 de maio</p>
          </div>
          <button className={styles.editar}>Editar</button>
        </div>

        <div className={styles.informacao}>
          <div>
            <p className={styles.datas}>Hóspedes</p>
            <p className={styles.dia}>2 hóspedes</p>
          </div>
          <button className={styles.editar}>Editar</button>
        </div>
      </div>

      <div className={styles.coluna2}>
        <div className={styles.cartao}>
          <div className={styles.quartoInformacao}>
            <Image src="/hotel-image.jpg" alt="" width={150} height={110} className={styles.imagemHotel} />
            <div>
              <p className={styles.tituloCartao}>Residencial Copacabana</p>
              <p className={styles.avaliacao}>
                <Star size={24} color="#fbbf24" /> 4,8 (10 comentários)
              </p>
              <div className={styles.icones}>
                <div className={styles.itemIcone}>
                  <Wifi size={24} color="#2e2e2e" />
                  <p>Wifi</p>
                </div>
                <div className={`${styles.itemIcone} ${styles.itemMeio}`}>
                  <Fan size={24} color="#2e2e2e" />
                  <p>Ar Condicionado</p>
                </div>
                <div className={styles.itemIcone}>
                  <Coffee size={24} color="#2e2e2e" />
                  <p>Café da manhã</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.pagamento}>
            <p className={styles.tituloPagamento}>Pagamento</p>

            <div className={styles.pagamentoContainer}>
              <div>
                <p className={styles.infoPreco}>Informações de preço</p>
                <p className={styles.detalhesPreco}>7 noites x R$ 150,49</p>
              </div>
              <p className={styles.total}>R$ 1053,43</p>
            </div>
          </div>

          <div className={styles.botaoContainer}>
            <button className={styles.botaoFinalizar}>Finalizar reserva</button>
          </div>
        </div>
      </div>

      {user ? null : (
        <div className={styles.containerLogin}>
          <p className={styles.textoLogin}>Entre ou cadastre-se para reservar</p>
          <button className={styles.login}>Login</button>
          <div className={styles.iconesMidias}>
            <Image src="/google-icon.png" alt="" width={32} height={32} />
            <Image src="/facebook-icon.jpg" alt="" width={32} height={32} />
            <Image src="/apple-icon.jpg" alt="" width={32} height={32} />
          </div>
        </div>
      )}
    </div>
  );
}

import styles from "./anfitriao.module.css";
import GraficoOcupacao from "../../components/gráficos";
import GraficoPizzaQuartos from "../../components/gráficos/GraficoPizzaQuartos";

export default function Anfitriao() {
  return (
    <div className={styles.container}>
      <p className={styles.texto}>Central de Controle</p>

      <div className={styles.controlesContainer}>
        <div className={styles.itensControle}>
          <p className={styles.texto2}>Reservas Ativas</p>
          <p className={styles.texto3}>3</p>
        </div>

        <div className={styles.itensControle}>
          <p className={styles.texto2}>Ganhos do Mês</p>
          <p className={styles.texto3}>R$1.757</p>
        </div>

        <div className={styles.itensControle}>
          <p className={styles.texto2}>Média das Avaliações</p>
          <p className={styles.texto3}>4.3</p>
        </div>
      </div>

      <div className={styles.graficosGrid}>
        <GraficoOcupacao />
        <GraficoPizzaQuartos />
      </div>

      <p className={styles.texto1}>Reservas</p>

      <div className={styles.tabelaWrapper}>
        <table className={styles.tabela}>
          <thead>
            <tr className={styles.header}>
              <th></th>
              <th>Hóspede</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Amanda Soares</td>
              <td>27.04.2006</td>
              <td>28.03.2006</td>
              <td className={styles.confirmado}>Confirmado</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Matheus Teodoro</td>
              <td>04.04.2006</td>
              <td>22.07.2006</td>
              <td className={styles.pendente}>Pendente</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Leonardo Garcia</td>
              <td>18.11.2028</td>
              <td>22.05.2006</td>
              <td className={styles.cancelado}>Cancelado</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className={styles.botao}>Cadastrar nova propriedade +</button>
    </div>
  );
}

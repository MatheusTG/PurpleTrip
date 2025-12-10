"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import styles from "./graficos.module.css";
import { reserve } from "../../mock/reserve";
import { gerarReservasPorQuarto } from "../../utils/gerarReservasPorQuarto";

const CORES = ["#510b76ff", "#e66056ff", "#3a6b50", "#e6b838", "#6cabf4ff", "#c537a9ff"];

export default function GraficoPizzaQuartos() {
  const data = gerarReservasPorQuarto(reserve);

  return (
    <div className={styles.graficoContainer}>
      <p className={styles.titulo}>Reservas por Quarto</p>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="total"
            nameKey="quarto"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={CORES[index % CORES.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

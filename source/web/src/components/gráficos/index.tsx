"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import styles from "./graficos.module.css";
import { reserve } from "../../mock/reserve";
import { gerarOcupacaoPorMes } from "../../utils/gerarOcupacaoPorMes";

export default function GraficoOcupacao() {
  const data = gerarOcupacaoPorMes(reserve);

  return (
    <div className={styles.graficoContainer}>
      <p className={styles.titulo}>Taxa de Ocupação por mês</p>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="mes"
            interval={0}
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar
            dataKey="ocupacoes"
            fill="#402d76ff"
            radius={[9, 9, 0, 0]}
            barSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

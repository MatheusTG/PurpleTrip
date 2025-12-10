import type { Reserva } from "../@types/reserva";

export function gerarReservasPorQuarto(reservas: Reserva[]) {
  const mapa: { [key: string]: number } = {};

  for (const reserva of reservas) {
    mapa[reserva.quartoId] = (mapa[reserva.quartoId] || 0) + 1;
  }

  return Object.entries(mapa).map(([quartoId, total]) => ({
    quarto: `Quarto ${quartoId}`,
    total,
  }));
}

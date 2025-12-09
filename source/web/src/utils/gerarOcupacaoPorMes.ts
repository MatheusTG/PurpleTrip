import { Reserva } from "../@types/reserva";

export interface OcupacaoMes {
  mes: string;
  ocupacoes: number;
}

export function gerarOcupacaoPorMes(reservas: Reserva[]): OcupacaoMes[] {
  const meses = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez",
  ];

  const contador = Array(12).fill(0);

  reservas.forEach((reserva) => {
    const mesIndex = reserva.dataInicio.getMonth(); 
    contador[mesIndex]++;
  });

  return meses.map((mes, index) => ({
    mes,
    ocupacoes: contador[index],
  }));
}

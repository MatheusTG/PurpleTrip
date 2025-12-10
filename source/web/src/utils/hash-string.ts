/// Criei essa função aqui pra gerar um hash pra sempre pegar a mesma imagem mockada pro mesmo quarto
export function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Converte pra 32bit (nem sei como funciona isso direito)
  }
  return Math.abs(hash);
}

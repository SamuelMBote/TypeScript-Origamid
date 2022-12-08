import ITransacao from '../interfaces/ITransacaoAPI';
import gerarTabela from './gerarTabelaHTML';

export default async function fetchTransacoes<T>(
  url: string,
): Promise<T | null> {
  try {
    const response: Response = await fetch(url);
    if (!response.ok) throw new Error('Erro:' + response.status);
    const json = await response.json();
    return json;
  } catch (error) {
    if (error instanceof Error)
      console.error('fetchTransacoes:' + error.message);
    return null;
  }
}

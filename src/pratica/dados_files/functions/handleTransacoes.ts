import fetchTransacoes from './fetchTransacoes';
import gerarTabela from './gerarTabelaHTML';
import ITransacaoAPI from '../interfaces/ITransacaoAPI';
import normalizarTransacao from './normalizarTransacao';
import preencherEstatisticas from './preencherEstatisticas';

export default async function handleTransacoes() {
  const transacoes = await fetchTransacoes<ITransacaoAPI[]>(
    'https://api.origamid.dev/json/transacoes.json',
  );

  if (!transacoes) return;
  const transacoesNormalizadas = transacoes.map(normalizarTransacao);
  gerarTabela(transacoesNormalizadas);
  preencherEstatisticas(transacoesNormalizadas);
}

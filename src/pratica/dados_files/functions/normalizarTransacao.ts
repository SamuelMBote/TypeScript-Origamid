import ITransacao from '../interfaces/ITransacao';
import ITransacaoAPI from '../interfaces/ITransacaoAPI';
import moedaParaNumero from './moedaParaNumero';
import stringToDate from './stringToDate';

export default function normalizarTransacao(
  transacao: ITransacaoAPI,
): ITransacao {
  return {
    status: transacao.Status,
    id: transacao.ID,
    data: stringToDate(transacao.Data),
    nome: transacao.Nome,
    pagamento: transacao['Forma de Pagamento'],
    email: transacao.Email,
    moeda: transacao['Valor (R$)'],
    valor: moedaParaNumero(transacao['Valor (R$)']),
    novo: Boolean(transacao['Cliente Novo']),
  };
}

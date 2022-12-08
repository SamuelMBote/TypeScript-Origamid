import ITransacao from '../interfaces/ITransacao';
type TransacaoValor = ITransacao & {valor: number};
export default function filtrarValor(
  transacao: ITransacao,
): transacao is TransacaoValor {
  return transacao.valor !== null;
}

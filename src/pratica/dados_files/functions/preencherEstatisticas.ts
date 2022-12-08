import Estatisticas from '../classes/Estatisticas';
import ITransacao from '../interfaces/ITransacao';
import preencherLista from './preencherLista';

export default function preencherEstatisticas(transacoes: ITransacao[]): void {
  const estatisticas = new Estatisticas(transacoes);
  const totalElement = document.querySelector<HTMLElement>('#somaTotalValores');
  const melhorDiaElement =
    document.querySelector<HTMLSpanElement>('#melhorDia span');

  if (totalElement) {
    totalElement.innerText = estatisticas.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  preencherLista(estatisticas.pagamento, 'pagamento');
  preencherLista(estatisticas.status, 'status');
  if (melhorDiaElement) {
    melhorDiaElement.innerText = estatisticas.melhorDia[0];
  }
}

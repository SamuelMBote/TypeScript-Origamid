import ITransacao from '../interfaces/ITransacao';
const corpoLista = document.querySelector<HTMLTableElement>(
  'table#tableTransacao',
);
export default function gerarTabela(listaTransacoes: ITransacao[]): void {
  listaTransacoes.forEach((transacao) => {
    const tableRow = document.createElement('tr');
    const item = `  <td>${transacao.status}</td>
    <td>${transacao.id}</td>
    <td>${transacao.data.toDateString()}</td>
    <td>${transacao.nome}</td>
    <td>${transacao.pagamento}</td>
    <td>${transacao.email}</td>
    <td>${transacao.valor}</td>
    <td>${transacao.novo ? 'Sim' : 'Não'}</td>`;
    tableRow.innerHTML = item;
    corpoLista?.querySelector<HTMLTableElement>('tbody')?.append(tableRow);
  });
}

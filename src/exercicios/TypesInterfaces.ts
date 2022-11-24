export async function fetchNotebook() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  mostrarProdutos(data);
}

interface IEmpresa {
  nome: string;
  fundacao: number;
  pais: string;
}
interface IProduto {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: IEmpresa;
  empresaMontadora: IEmpresa;
}
export function mostrarProdutos(produto: IProduto) {
  const sectionArray: HTMLElement = document.querySelector(
    '#typesinterfaces div',
  );

  sectionArray.innerHTML += `<div>
  
  <h3>${produto.nome}</h3>
  <p>R$ ${produto.preco.toFixed(2)}</p>
  <p>${produto.descricao}</p>
  <p>Garantia de ${produto.garantia} anos</p>
  <p>${produto.seguroAcidentes ? 'Com Seguro' : 'Sem Seguro'}</p>
  <p>Fabricado por: ${
    produto.empresaFabricante.nome +
    ', ' +
    produto.empresaFabricante.pais +
    ', ' +
    produto.empresaFabricante.fundacao
  }</p>
  <p>Montado por: ${
    produto.empresaMontadora.nome +
    ', ' +
    produto.empresaMontadora.pais +
    ', ' +
    produto.empresaMontadora.fundacao
  }</p>
  </div>`;
}

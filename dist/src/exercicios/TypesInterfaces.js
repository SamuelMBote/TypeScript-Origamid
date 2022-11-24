var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchNotebook() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const data = yield response.json();
        mostrarProdutos(data);
    });
}
export function mostrarProdutos(produto) {
    return (document.body.innerHTML += `<div>
  <h2>Types e Interfaces</h2>
  <h3>${produto.nome}</h3>
  <p>R$ ${produto.preco.toFixed(2)}</p>
  <p>${produto.descricao}</p>
  <p>Garantia de ${produto.garantia} anos</p>
  <p>${produto.seguroAcidentes ? 'Com Seguro' : 'Sem Seguro'}</p>
  <p>Fabricado por: ${produto.empresaFabricante.nome +
        ', ' +
        produto.empresaFabricante.pais +
        ', ' +
        produto.empresaFabricante.fundacao}</p>
  <p>Montado por: ${produto.empresaMontadora.nome +
        ', ' +
        produto.empresaMontadora.pais +
        ', ' +
        produto.empresaMontadora.fundacao}</p>
  </div>`);
}
//# sourceMappingURL=TypesInterfaces.js.map
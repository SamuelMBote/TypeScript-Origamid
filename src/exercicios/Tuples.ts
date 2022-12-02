interface ProdutoDetalhe {
  marca: string;
  cor: string;
}
type Venda = [string, number, string, ProdutoDetalhe];

export function isVenda(obj: unknown): obj is Venda {
  if (
    Array.isArray(obj) &&
    typeof obj[0] === 'string' &&
    typeof obj[1] === 'number' &&
    typeof obj[2] === 'string' &&
    typeof obj[3] === 'object'
  ) {
    return true;
  } else {
    return false;
  }
}

export function somarVenda(vendas: Venda[]) {
  let total1 = 0;
  for (let i = 0; i < vendas.length; i++) {
    total1 += vendas[i][1];
  }

  const total2 = vendas.reduce((anterior: number, atual: Venda) => {
    return anterior + atual[1];
  }, 0);

  return `<p>O total gerado pelo for é: R$ ${total1.toFixed(
    2,
  )}</p><p>O total gerado utilizando reduce é: R$ ${total1.toFixed(2)}</p>`;
}

export async function fetchVendas() {
  const response = await fetch('https://api.origamid.dev/json/vendas.json');
  const json = await response.json();
  const resultadoTuples = document.querySelector<HTMLDivElement>('#tuples div');

  if (Array.isArray(json)) {
    if (resultadoTuples) resultadoTuples.innerHTML = somarVenda(json);
  }
}

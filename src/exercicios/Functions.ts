export function arredondaCeil(valor: number): number;
export function arredondaCeil(valor: string): string;
export function arredondaCeil(valor: string | number): string | number {
  const campoResultado: HTMLParagraphElement =
    document.querySelector('#functions div p');

  let resultado: string | number;
  if (typeof valor === 'string') {
    resultado = Number(valor);
    resultado = Math.ceil(resultado);
    campoResultado.innerHTML += `O resultado arredondado é ${resultado}`;
    return resultado;
  } else if (typeof valor === 'number') {
    resultado = Math.ceil(valor);
    campoResultado.innerHTML += `O resultado arredondado é ${resultado}`;
    return resultado;
  } else {
    throw new Error('Voce deve passar um número ou uma String');
  }
}

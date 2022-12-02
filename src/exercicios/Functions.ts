export function arredondaCeil(valor: number): number;
export function arredondaCeil(valor: string): string;
export function arredondaCeil(valor: string | number): string | number {
  const campoResultado =
    document.querySelector<HTMLParagraphElement>('#functions div p');

  let resultado: string | number;
  if (typeof valor === 'string') {
    resultado = Number(valor);
    resultado = Math.ceil(resultado);
    if (campoResultado)
      campoResultado.innerHTML += `O resultado arredondado é ${resultado}`;
    return resultado;
  } else if (typeof valor === 'number') {
    resultado = Math.ceil(valor);
    if (campoResultado)
      campoResultado.innerHTML += `O resultado arredondado é ${resultado}`;
    return resultado;
  } else {
    throw new Error('Voce deve passar um número ou uma String');
  }
}

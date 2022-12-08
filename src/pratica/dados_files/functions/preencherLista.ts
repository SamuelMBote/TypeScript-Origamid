import ICountList from '../interfaces/ICountList';

export default function preencherLista(lista: ICountList, id: string): void {
  const Element = document.getElementById(id);
  if (Element) {
    Object.keys(lista).forEach((key) => {
      const paragrafo = document.createElement('p');
      paragrafo.innerHTML += `${key}: ${lista[key]}`;
      Element.append(paragrafo);
    });
  }
}

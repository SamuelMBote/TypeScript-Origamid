function modifyStyle(elemento: Element) {
  if (elemento instanceof HTMLElement) {
    elemento.style.color = 'red';
    elemento.style.border = '2px solid';
    elemento.style.padding = '10px';
    elemento.style.margin = '5px';
  }
}

export function modifyNodeList() {
  const linksDOM = document.querySelectorAll('.link');

  linksDOM.forEach((link) => {
    modifyStyle(link);
  });
}

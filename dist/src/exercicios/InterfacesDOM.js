function createNodeList() {
    const linkHome = document.createElement('a');
    const linkProdutos = document.createElement('a');
    const buttonLogin = document.createElement('button');
    const headerInterfacesDOM = document.createElement('h2');
    headerInterfacesDOM.innerText = 'Interfaces do DOM';
    linkHome.innerText = 'Home';
    linkProdutos.innerText = 'Produtos';
    buttonLogin.innerText = 'Login';
    linkHome.href = '/';
    linkProdutos.href = '/produtos';
    linkHome.classList.add('link');
    linkProdutos.classList.add('link');
    buttonLogin.classList.add('link');
    document.body.innerHTML +=
        headerInterfacesDOM.outerHTML +
            linkHome.outerHTML +
            linkProdutos.outerHTML +
            buttonLogin.outerHTML;
    return;
}
function modifyStyle(elemento) {
    if (elemento instanceof HTMLElement) {
        elemento.style.color = 'red';
        elemento.style.border = '2px solid';
        elemento.style.padding = '10px';
        elemento.style.margin = '5px';
    }
}
export function modifyNodeList() {
    createNodeList();
    const linksDOM = document.querySelectorAll('.link');
    linksDOM.forEach((link) => {
        modifyStyle(link);
    });
}
//# sourceMappingURL=InterfacesDOM.js.map
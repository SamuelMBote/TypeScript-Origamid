function criaElementos() {
    document.body.innerHTML +=
        `<h2>Eventos e Callback</h2>` +
            `<header id="header">
  <a id="logo" href="">Logo</a>
  <nav id="nav">
    <button
      aria-label="Abrir Menu"
      aria-expanded="false"
      aria-haspopup="true"
      aria-controls="menu"
      id="btn-mobile"
    >
      Menu
      <span id="hamburger"></span>
    </button>
    <ul id="menu" role="menu">
      <li><a href="/">Sobre</a></li>
      <li><a href="/">Produtos</a></li>
      <li><a href="/">Portfólio</a></li>
      <li><a href="/">Contato</a></li>
    </ul>
  </nav>
</header>
`;
}
export function eventosCallback() {
    criaElementos();
}
//# sourceMappingURL=EventosCallback.js.map
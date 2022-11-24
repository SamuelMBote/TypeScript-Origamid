import '../scss/main.scss';
import { fetchCursos } from './exercicios/Arrays';
import { meuEstilo } from './exercicios/Style';
import { fetchNotebook } from './exercicios/TypesInterfaces';
import { replaceLinks } from './exercicios/Instanceof';
import { modifyNodeList } from './exercicios/InterfacesDOM';
import { eventosCallback } from './exercicios/EventosCallback';
eventosCallback();
fetchNotebook();
fetchCursos();
meuEstilo();
replaceLinks();
modifyNodeList();
const menuButton = document.querySelector('#btn-mobile');
function toggleMenu() {
    console.log('teste');
}
menuButton === null || menuButton === void 0 ? void 0 : menuButton.addEventListener('pointerdown', toggleMenu);
document.querySelectorAll('h2').forEach((header) => {
    console.log(header.innerText);
});
//# sourceMappingURL=index.js.map
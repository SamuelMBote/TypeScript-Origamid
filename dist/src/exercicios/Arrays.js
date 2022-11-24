var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const data = yield response.json();
        mostrarCursos(data);
    });
}
export function mostrarCursos(cursos) {
    return (document.body.innerHTML +=
        `<h2>Arrays</h2>` +
            cursos.map((curso) => {
                return `<div>
    <h3 style="color:${curso.nivel == 'iniciante' ? 'blue' : 'red'}" >${curso.nome}</h3>
      <p>Horas: ${curso.horas}</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
      <p>Tags: ${curso.tags.join(', ').toLowerCase()}</p>
      <p>idAulas: ${curso.idAulas.join(' | ')}</p>
    </div>`;
            }));
}
//# sourceMappingURL=Arrays.js.map
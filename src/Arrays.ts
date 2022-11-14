interface ICurso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: false;
  tags: string[];
  idAulas: number[];
  nivel: string;
}
export async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

export function mostrarCursos(cursos: ICurso[]) {
  return (document.body.innerHTML +=
    `<h2>Arrays</h2>` +
    cursos.map((curso) => {
      return `<div>
    <h3 style="color:${curso.nivel == 'iniciante' ? 'blue' : 'red'}" >${
        curso.nome
      }</h3>
      <p>Horas: ${curso.horas}</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
      <p>Tags: ${curso.tags.join(', ').toLowerCase()}</p>
      <p>idAulas: ${curso.idAulas.join(' | ')}</p>
    </div>`;
    }));
}

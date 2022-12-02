interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: string;
}

function isCurso(value: unknown): value is Curso {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'horas' in value &&
    'tags' in value
  ) {
    return true;
  } else {
    return false;
  }
}
export function handleCurso(data: unknown) {
  const listaCursos =
    document.querySelector<HTMLDivElement>('#usertypeguard div');

  if (Array.isArray(data)) {
    data.filter(isCurso).forEach((item) => {
      if (listaCursos)
        listaCursos.innerHTML += `<p>Nome: ${item.nome}</p>
      <p>Horas: ${item.horas}</p>
      <p>Aulas: ${item.aulas}</p>`;
    });
  }
}

export async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCurso(json);
}

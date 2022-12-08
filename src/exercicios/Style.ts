export function meuEstilo() {
  document.body.style.backgroundColor = '#212121';
  document.body.style.color = 'white';
  const header = document.querySelectorAll('h1');
  header.forEach((h) => (h.style.color = 'wheat'));
}

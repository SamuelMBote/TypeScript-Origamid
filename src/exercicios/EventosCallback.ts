export function eventosCallback() {
  const menuButton: HTMLButtonElement = document.querySelector('button');
  console.log(menuButton);
  menuButton.addEventListener('pointerdown', (event) => console.log(event));
  /*window.addEventListener('DOMContentLoaded', () => {
    menuButton?.addEventListener('click', () => {
      console.log('funcionou');
    });
  });*/
}

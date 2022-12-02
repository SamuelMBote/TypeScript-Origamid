export function eventosCallback() {
  const menuButton = document.querySelector<HTMLButtonElement>('button');
  menuButton?.addEventListener('pointerdown', handleEvent);

  function handleEvent(Event: PointerEvent) {
    const nav = document.querySelector('nav');
    const button = Event.currentTarget;

    if (button instanceof HTMLElement && nav) {
      const active = nav.classList.contains('active');
      if (active) {
        nav.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Abrir Menu');
      } else {
        nav.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('aria-label', 'Fechar Menu');
      }
    }
  }
}

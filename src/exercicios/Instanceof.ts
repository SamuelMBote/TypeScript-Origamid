function createLink() {
  const linkOrigamid = document.createElement('a');
  linkOrigamid.href = 'http://www.origamid.com';
  linkOrigamid.id = 'origamid';
  linkOrigamid.innerText = 'Origamid';

  const sectionInstanceof =
    document.querySelector<HTMLDivElement>('#instanceof div');
  if (sectionInstanceof) sectionInstanceof.innerHTML += linkOrigamid.outerHTML;
  return;
}
export function replaceLinks() {
  createLink();
  const linkOrigamid = document.getElementById('origamid');

  if (linkOrigamid instanceof HTMLAnchorElement) {
    linkOrigamid.href = linkOrigamid.href.replace('http://', 'https://');
  }
}

const video = document.querySelector('video');

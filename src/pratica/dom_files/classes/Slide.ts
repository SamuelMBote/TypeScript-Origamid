import Timeout from './Timeout';

export default class Slide {
  container: Element;
  slides: Element[];
  controls: Element;
  time: number;
  index: number;
  slide: Element;
  timeout: Timeout | null;
  paused: boolean;
  pausedTimeout: Timeout | null;
  thumbItems: HTMLElement[] | null;
  thumb: HTMLElement | null;
  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000,
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;
    this.index = localStorage.getItem('activeSlide')
      ? Number(localStorage.getItem('activeSlide'))
      : 0;
    this.slide = this.slides[this.index];
    this.timeout = null;
    this.paused = false;
    this.pausedTimeout = null;
    this.thumbItems = null;
    this.thumb = null;
    this.show(this.index);
    this.init();
  }
  hide(el: Element) {
    el.classList.remove('active');
    if (el instanceof HTMLVideoElement) {
      el.currentTime = 0;
      el.pause();
    }
  }
  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];
    localStorage.setItem('activeSlide', String(this.index));
    if (this.thumbItems) {
      this.thumb = this.thumbItems[this.index];
      this.thumbItems.forEach((el) => el.classList.remove('active'));
      this.thumb.classList.add('active');
    }
    this.slides.forEach((el) => this.hide(el));
    this.slide.classList.add('active');
    if (this.slide instanceof HTMLVideoElement) {
      this.autoVideo(this.slide);
    } else {
      this.auto(this.time);
    }
  }
  auto(time: number) {
    this.timeout?.clear();
    this.timeout = new Timeout(() => this.next(), time);
    if (this.thumb) this.thumb.style.animationDuration = `${time}ms`;
  }
  autoVideo(video: HTMLVideoElement) {
    video.muted = true;
    video.play();
    let firstPlay = true;
    video.addEventListener('playing', () => {
      if (firstPlay) this.auto(video.duration * 1000);
      firstPlay = false;
    });
  }
  pause() {
    document.body.classList.add('paused');
    this.pausedTimeout = new Timeout(() => {
      this.timeout?.pause();
      this.paused = true;
      this.thumb?.classList.add('paused');
      if (this.slide instanceof HTMLVideoElement) {
        this.slide.pause();
      }
    }, 300);
  }
  continue() {
    document.body.classList.remove('paused');
    this.pausedTimeout?.clear();
    if (this.paused) {
      this.paused = false;

      this.timeout?.continue();
      this.thumb?.classList.remove('paused');
      if (this.slide instanceof HTMLVideoElement) {
        this.slide.play();
      }
    }
  }
  prev() {
    if (this.paused) return;
    const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
    this.show(prev);
  }
  next() {
    if (this.paused) return;
    const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
    this.show(next);
  }
  private addControls() {
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    prevButton.innerText = '<';
    nextButton.innerText = '>';
    this.controls.appendChild(prevButton);
    this.controls.appendChild(nextButton);
    this.controls.addEventListener('pointerdown', () => this.pause());
    document.addEventListener('pointerup', () => this.continue());
    document.addEventListener('touchend', () => this.continue());
    nextButton.addEventListener('pointerup', () => this.next());
    prevButton.addEventListener('pointerup', () => this.prev());
  }
  private addThumbItens() {
    const thumbContainer = document.createElement('div');
    thumbContainer.id = 'slide-thumb';
    for (let index = 0; index < this.slides.length; index++) {
      thumbContainer.innerHTML += `<span><span class="thumb-item"> </span></span>`;
    }
    this.controls.appendChild(thumbContainer);
    this.thumbItems = Array.from(document.querySelectorAll('.thumb-item'));
  }

  private init() {
    this.addControls();
    this.addThumbItens();
    this.show(this.index);
  }
}

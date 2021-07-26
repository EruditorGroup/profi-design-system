function easeInQuad(
  step: number,
  start: number,
  delta: number,
  duration: number,
): number {
  return delta * (step /= duration) * step + start;
}

const getScrollPosition = (to: number) => {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  return to > maxScroll ? maxScroll : to;
};

const interval = 10;

export default function smoothScroll(
  to: number,
  duration = 800,
  step = -1,
): void {
  if (duration <= 0) return;

  const target = getScrollPosition(to);
  const current: number = window.pageYOffset;
  const tick = easeInQuad(++step, current, target - current, duration);

  const done = () => {
    clearTimeout(timeout);
    window.removeEventListener('mousewheel', done);
  };

  const timeout = setTimeout(() => {
    window.scrollTo(0, tick);
    if (window.pageYOffset === to) return done();
    smoothScroll(to, duration - 10, step);
    done();
  }, interval);

  window.addEventListener('mousewheel', done);
}

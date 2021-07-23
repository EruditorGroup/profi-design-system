export default function smoothScroll(position: number): void {
  //Find the where you want to scroll
  let top = window.scrollY;

  const smooth = setInterval(() => {
    const leftover = position - top;
    if (top === position) {
      clearInterval(smooth);
    } else if (position > top && leftover < 10) {
      top += leftover;
      window.scrollTo(0, top);
    } else if (position > top - 10) {
      top += 10;
      window.scrollTo(0, top);
    }
  }, 6);
}

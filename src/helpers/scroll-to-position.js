import scrollTo from "@bnchdrff/scroll-to";

export default function scrollToPosition(el, position, certainWindow) {
  scrollTo(0, position, {
    ease: "out-sine",
    duration: 500,
    certainWindow,
  });
  return el.getBoundingClientRect();
}

export default function scrollToPosition(el, position, certainWindow) {
  certainWindow.scrollTo(0, position);

  return el.getBoundingClientRect();
}

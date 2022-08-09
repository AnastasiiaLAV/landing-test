import refs from "./refs";

let scroll = 0;

window.addEventListener('scroll', scrollHandler);

function scrollHandler() {

  const yOffset = window.pageYOffset;

  if (yOffset > 80 && yOffset > scroll) {
    refs.header.classList.add('out');
  } else {
    refs.header.classList.remove('out');
  }
  scroll = yOffset;
}

import refs from './refs'

const isVisible = "is-visible";
refs.send.addEventListener("click", openModal);

refs.modalBackOut.addEventListener("click", closeModal);

export function openModal() {
refs.modal.classList.add(isVisible);
}

function closeModal() {
        refs.modal.classList.remove(isVisible);
}

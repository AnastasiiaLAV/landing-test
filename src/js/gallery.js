import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

new SimpleLightbox('.gallery-list a', {
    captionDelay: 250,
    loop: false,
    scaleImageToRatio: true,
});

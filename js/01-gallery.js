import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGallery(array) {
    return array.reduce(
        (acc, item) =>
            acc +
            `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"/></a></div>`,
        '',
    );
}

const result = createGallery(galleryItems);

const list = document.querySelector('.gallery');
list.insertAdjacentHTML('beforeend', result);

let instance = null;

function openOriginalImage(event) {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
        instance = basicLightbox.create(
            `<img src="${event.target.dataset.source}" width="800" height="600">`,
            {
                onShow: () =>
                list.addEventListener(
                        'keydown',
                        onEscClose,
                    ),
                onClose: () =>
                list.removeEventListener(
                        'keydown',
                        onEscClose,
                    ),
            },
        );
        instance.show();
    }
}

list.addEventListener('click', openOriginalImage);

function onEscClose(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
}

console.log(galleryItems);

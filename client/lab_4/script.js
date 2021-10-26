let slidePosition = 0;
const slides = document.querySelectorAll('div.photo-grid-item');
const totalSlides = slides.length;

document.querySelector('#carousel__button--next').addEventListener('click',  function() {
        moveToNextSlide();
    });

document.querySelector('#carousel__button--prev').addEventListener("click",  function() {
        moveToPrevSlide();
    });

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('photo-grid-item--visible');
        slide.classList.add('photo-grid-item--hidden');
    }
    slides[slidePosition].classList.add('photo-grid-item--visible');
}
function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides-1;
    }
    else {
        slidePosition--;
    }
    updateSlidePosition();
}
function moveToNextSlide() {
    if (slidePosition === totalSlides -1) {
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }
    updateSlidePosition();
}
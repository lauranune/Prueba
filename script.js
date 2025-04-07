document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const images = document.querySelectorAll('.carousel-track img');

    const visibleImages = 4;
    const totalImages = images.length;
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalImages - visibleImages) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const imageWidth = images[0].clientWidth;
        track.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
    }

    window.addEventListener('resize', updateCarousel);
});

const trackFourth = document.querySelector('.carousel-track-fourth');
const nextBtnFourth = document.getElementById('nextBtnFourth');
const prevBtnFourth = document.getElementById('prevBtnFourth');
const imagesFourth = document.querySelectorAll('.carousel-track-fourth img');

const visibleImagesFourth = 2;
const totalImagesFourth = imagesFourth.length;
let currentIndexFourth = 0;

nextBtnFourth.addEventListener('click', () => {
    if (currentIndexFourth < totalImagesFourth - visibleImagesFourth) {
        currentIndexFourth++;
        updateCarouselFourth();
    }
});

prevBtnFourth.addEventListener('click', () => {
    if (currentIndexFourth > 0) {
        currentIndexFourth--;
        updateCarouselFourth();
    }
});

function updateCarouselFourth() {
    const imageWidthFourth = imagesFourth[0].clientWidth;
    trackFourth.style.transform = `translateX(-${imageWidthFourth * currentIndexFourth}px)`;
}

window.addEventListener('resize', updateCarouselFourth);


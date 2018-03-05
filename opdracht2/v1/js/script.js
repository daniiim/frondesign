var volgende = document.querySelector('.next');
var vorige = document.querySelector('.previous');
var slides = document.querySelectorAll('.slideshow .slide');
var swipe = document.querySelector('.swipe');
var huidigeSlide = 0;

function volgendeSlide() {
	gaSlide(huidigeSlide + 1);
}

function vorigeSlide() {
	gaSlide(huidigeSlide - 1);
}

function gaSlide(n) {
	slides[huidigeSlide].className = 'slide';
	huidigeSlide = (n + slides.length) % slides.length;
	slides[huidigeSlide].className = 'slide show';
}

// click
volgende.addEventListener('click', function () {
    volgendeSlide();
});
 
vorige.addEventListener('click', function () {
    vorigeSlide();
});


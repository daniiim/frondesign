// variabelen js
var volgende = document.querySelector('.volgende');
var vorige = document.querySelector('.vorige');
var slides = document.querySelectorAll('.slideshow .slide');
var swipe = document.querySelector('.swipe');
var swipen = swipe, startX, afstandX;
var slideNr = 0;

// functie volgende slide
function volgendeSlide() {
	gaSlide(slideNr + 1);
};

// functie vorige slide
function vorigeSlide() {
	gaSlide(slideNr - 1);
};

// funtie slide weergeven d.m.v class "show"
function gaSlide(nr) {
	slides[slideNr].className = 'slide';
	slideNr = (nr + slides.length) % slides.length;
	slides[slideNr].className = 'slide show';
};

// sliden dmv arrows
volgende.addEventListener('click', function () {
    volgendeSlide();
});

vorige.addEventListener('click', function () {
    vorigeSlide();
});

// sliden dmv swipen
// detectie touch start
swipen.addEventListener('touchstart', function(detect){
    var touch = detect.changedTouches[0]
        dist = 0
        startX = touch.pageX
});
  
// detectie afstand x bij touch eind, groter of kleiner dan 0
swipen.addEventListener('touchend', function(detect){
    var touch = detect.changedTouches[0]
        afstandX = touch.pageX - startX
    if (Math.abs(afstandX) > 0){
        swipedirection = (afstandX < 0)? volgendeSlide() : vorigeSlide();
    }
});

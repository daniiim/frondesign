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

// swipe 
function swipedetect(swipe, callback) {
    var touch = swipe,
    swiperichting,
    startX,
    distX,
    limit = 100,
    handleswipe = callback || function(swiperichting) {}
  
    touch.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swiperichting = 'Niet'
        dist = 0
        startX = touchobj.pageX
        e.preventDefault()
    }, false)
  
    touch.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX
            if (Math.abs(distX) >= limit){
                swiperichting = (distX < 0)? 'Links' : 'Rechts'
            }
        handleswipe(swiperichting)
        e.preventDefault()
    }, false)
}
swipedetect(swipe, function(swiperichting){
    console.log('' + swiperichting +' geswiped');
    volgendeSlide();
});


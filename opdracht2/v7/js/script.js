// variabelen gebruiken
var rozeFilter = document.querySelector('.rozefilter');
var rozeResults = document.querySelectorAll('.rozeresult');
var blauweFilter = document.querySelector('.blauwefilter');
var blauweResults = document.querySelectorAll('.blauwresult');
var geleFilter = document.querySelector('.gelefilter');
var geelResults = document.querySelectorAll('.geelresult');
var allResults = document.querySelectorAll('.gallery');
var reset = document.querySelector('.geenfilter');
var filterToggle = document.querySelector('.toggle');
var dropDown = document.querySelector('.dropdown-menu');
var loader = document.querySelector('.loaderr');
var tag = document.querySelector('.tag');
var touch = document.querySelector('.popup');
var volgende = document.querySelector('.volgende');
var vorige = document.querySelector('.vorige');
var slides = document.querySelectorAll('.slideshow .slide');
var swipe = document.querySelector('.swipe');
var slider = document.querySelector('.slider');
var foto = document.querySelector('.gallery');
var swipen = swipe, startX, afstandX;
var slideNr = 0;

    // test
        foto.addEventListener('click',function(){
            slider.classList.toggle('active');
        });

        swipe.addEventListener('click',function(){
            slider.classList.toggle('active');
        });

    // touch
        tag.addEventListener('touchstart',function(){
            touch.classList.add('active');
        });
 
        tag.addEventListener('touchend',function(){
            touch.classList.remove('active');
        });
 
    // dropdown toggle
    filterToggle.addEventListener("click",function(){
        dropDown.classList.toggle('active');  
      }
    );

    // filteren op roze
    rozeFilter.addEventListener("click", function(){
    loader.classList.toggle('active');
    allResults.forEach(function(el) {
      el.classList.remove('active');
    });
        dropDown.classList.toggle('active');

        setTimeout(function(){
        loader.classList.toggle('active');
        }, 1000);

    rozeResults.forEach(function(el) {
    setTimeout(function(){
      el.classList.add('active');
    }, 1000);
    });    
    });


    // filteren op blauw
    blauweFilter.addEventListener("click", function(){
    loader.classList.toggle('active');
        allResults.forEach(function(el) {
      el.classList.remove('active');
    });
        dropDown.classList.toggle('active');

        setTimeout(function(){
        loader.classList.toggle('active');
        }, 1000);

    blauweResults.forEach(function(el) {
    setTimeout(function(){
      el.classList.add('active');
    }, 1000);
    });
    });


    // filteren op geel
    geleFilter.addEventListener("click", function(){
    loader.classList.toggle('active');
        allResults.forEach(function(el) {
      el.classList.remove('active');
    });
        dropDown.classList.toggle('active');

        setTimeout(function(){
        loader.classList.toggle('active');
        }, 1000);

    geelResults.forEach(function(el) {
    setTimeout(function(){
      el.classList.add('active');
    }, 1000);
    });
    });


    // filters resetten
    reset.addEventListener("click", function(){
    loader.classList.toggle('active');
        allResults.forEach(function(el) {
      el.classList.remove('active');
    });
        dropDown.classList.toggle('active');

        setTimeout(function(){
        loader.classList.toggle('active');
        }, 1000);

    allResults.forEach(function(el) {
    setTimeout(function(){
      el.classList.add('active');
    }, 1000);
    });
    });

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
	slides[slideNr].className = 'slide active';
};

// sliden dmv arrows
volgende.addEventListener('click', function () {
    volgendeSlide();
});

vorige.addEventListener('click', function () {
    vorigeSlide();
});

// sliden dmv pijltjestoetsen
window.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowLeft":
      vorigeSlide();
          
      break;
    case "ArrowRight":
      volgendeSlide();
      break;
  };
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

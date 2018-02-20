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


    //log    
    console.log(allResults);
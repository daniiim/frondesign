// variabelen gebruiken
var rozeFilter = document.querySelector('.rozefilter');
var rozeResults = document.querySelectorAll('.rozeresult');
var allResults = document.querySelectorAll('.gallery');
var filterToggle = document.querySelector('.toggle');
var dropDown = document.querySelector('.dropdown-menu');

// dropdown toggle
filterToggle.addEventListener("click",function(){
    dropDown.classList.toggle('active');  
  }
);   

// filteren op roze
rozeFilter.addEventListener("click", function(){
allResults.forEach(function(el) {
  el.classList.remove('active');
});   

rozeResults.forEach(function(el) {
  el.classList.add('active');
});   
});
//log    
console.log(allResults);
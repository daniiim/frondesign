// variabelen gebruiken
var filterToggle = document.querySelector('.toggle');
var dropDown = document.querySelector('.dropdown-menu');

// dropdown toggle
filterToggle.addEventListener("click",function(){
    dropDown.classList.toggle('active');  
  }
);   
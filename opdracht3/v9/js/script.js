// Sticky header
window.addEventListener('scroll', function() {    
    var top = this.scrollY;
    var tableHead = document.querySelector(".headlist");
    var coinList = document.querySelector(".coinlist");
    
    if (top >= 75) {
        tableHead.classList.add("sticky");
        coinList.classList.add("scrolled");
      
        } else {
            tableHead.classList.remove("sticky");
            coinList.classList.remove("scrolled");
        }
});

// Top button appear
window.addEventListener('scroll', function() {
    var scrolled = this.scrollY;
    var backButton = document.querySelector(".back");
    
    if (scrolled >= 350) {
        backButton.classList.add("active");
        } else {
            backButton.classList.remove("active");
        }
});

// Scroll to top
var back = document.querySelector(".back");
    back.addEventListener('click',function(){
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });
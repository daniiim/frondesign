var loader = document.querySelector('.loader');
var requestURL = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=70';
var request = new XMLHttpRequest(); 

// haal API url op met json
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var cryptoList = request.response;
    showCryptos(cryptoList);
};

// volledige functie weergeven api data
function showCryptos(jsonObj) {
    var crypto = jsonObj;
    console.log("Koersen ophalen..")
    loader.classList.add('active');
    
    // loader voor weergeven van resultaten
    setTimeout(function(){
        loader.classList.remove('active');
        console.log("Koersen gevonden..")
    }, 1000);
    
    // stelt data uit voor wegeven loader
    setTimeout(function(){
        for (var i = 0; i < crypto.length; i++) {
        //console.table(crypto[i])
        
        // enkel naamgeving aan variabelen     
        var price = crypto[i].price_eur;
        var cryptoList = crypto[i].rank;
    
        // naamgeving en afronding variabelen met cijfers    
        var euro = Math.round(price*100)/100;
        var cap = crypto[i].market_cap_eur;
        var billion = Math.round(cap*1000)/1000000;
        var million = Math.round(cap*1000)/1000;
        var thousand = Math.round(cap*1000)/10;

        // creeren elementen om weer te geven in dom    
        var coinList = document.querySelector('.coinlist');
        var cryptoRank = document.createElement('li');
        var cryptoSymbol = document.createElement('li');
        var cryptoName = document.createElement('p');
        var cryptoPrice = document.createElement('li');
        var cryptoChange = document.createElement('li');
        var cryptoCap = document.createElement('li');
        var image = new Image();

        // plaatst content of functie in domelement    
        image.src = "/assets/images/icons/" +crypto[i].symbol+ ".png"; 
        cryptoRank.textContent = [i +1];
        cryptoName.innerHTML = crypto[i].name;
        cryptoSymbol.innerHTML = crypto[i].symbol;
        cryptoPrice.innerHTML = "€ " + euro;
        cryptoChange.innerHTML = crypto[i].percent_change_24h + "  %"; 
        cryptoCap.innerHTML = crypto[i].percent_change_7d + "  %";

        // geeft kleur aan percentages
        if (crypto[i].percent_change_24h > 0) {
            cryptoChange.classList.add("positive");
            } else if (crypto[i].percent_change_24h < 0) {
                cryptoChange.classList.add("negative");
                } else {
                    cryptoChange.classList.add("neutral");
                }
        
        if (crypto[i].percent_change_7d > 0) {
            cryptoCap.classList.add("positive");
            } else if (crypto[i].percent_change_7d < 0) {
                cryptoCap.classList.add("negative");
                } else {
                    cryptoCap.classList.add("neutral");
                }

        // rond cijfers af met een standaard en variabele waarde
        function valuta(x) {
            return Number.parseFloat(x).toFixed(2);
        }
        
        // creert lijst voor elk element en plaatst deze in een item
        for (var j = 0; j < cryptoList.length; j++) {
            var listItem = document.createElement('ul');
            coinList.appendChild(listItem);
        };
    
        // geeft class aan aangemaakte elementen voor styling    
        image.classList.add("icon");
        listItem.classList.add("crypto");
        cryptoRank.classList.add("rank");
        cryptoSymbol.classList.add("symbol");
        cryptoName.classList.add("name");
        cryptoPrice.classList.add("price");
        cryptoChange.classList.add("change");
        cryptoCap.classList.add("capacity");

        // plaatst de elementen op juiste plek in dom            
        cryptoSymbol.appendChild(image);
        listItem.appendChild(cryptoRank);    
        listItem.appendChild(cryptoSymbol);
        cryptoSymbol.appendChild(cryptoName);
        listItem.appendChild(cryptoPrice);
        listItem.appendChild(cryptoChange);
        listItem.appendChild(cryptoCap);
            
            
    };
    console.log("Alle koersen geladen..")
    }, 1000);
};

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
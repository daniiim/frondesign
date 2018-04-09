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
        var downButton = document.createElement('li');
        var subList = document.createElement('ul');
        var sub1 = document.createElement('li');
        var sub2 = document.createElement('li');
        var sub3 = document.createElement('li');
        var sub4 = document.createElement('a');
        var image = new Image();
        var down = new Image();

        // plaatst content of functie in domelement    
        image.src = "/assets/images/icons/" +crypto[i].symbol+ ".png";
        down.src = "/assets/images/down.png";   
        cryptoRank.textContent = [i +1];
        cryptoName.innerHTML = crypto[i].name;
        cryptoSymbol.innerHTML = crypto[i].symbol;
        cryptoPrice.innerHTML = "€ " + euro;
        cryptoChange.innerHTML = crypto[i].percent_change_24h + "  %"; 
        cryptoCap.innerHTML = crypto[i].percent_change_7d + "  %";
        sub1.innerHTML = crypto[i].symbol + " in omloop: <br>\n" + crypto[i].total_supply;
        sub2.innerHTML = crypto[i].symbol + " beschikbaar: <br>\n" + crypto[i].max_supply;
        sub4.innerHTML = crypto[i].symbol + " kopen / verkopen";
        sub4.href = "https://www.binance.com/trade.html?symbol=" + crypto[i].symbol + "_BTC";
        sub4.target = "_blank";

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
            
        if (crypto[i].market_cap_eur > 999999999) {
            sub3.innerHTML = crypto[i].symbol + " markt: <br>\n" + "€ " + valuta(Math.round(billion)/1000000) + " mjrd";
            } else if (crypto[i].market_cap_eur < 999999) {
                sub3.innerHTML = crypto[i].symbol + " markt: <br>\n" + "€ " + valuta(Math.round(thousand)/1000000) + " k";
                } else {
                    sub3.innerHTML = crypto[i].symbol + " markt: <br>\n" + "€ " + valuta(Math.round(million)/1000000) + " mln";
                }
        
        // creert lijst voor elk element en plaatst deze in een item
        for (var j = 0; j < cryptoList.length; j++) {
            var listItem = document.createElement('ul');
            coinList.appendChild(listItem);
        };
    
        // geeft class aan aangemaakte elementen voor styling    
        image.classList.add("icon");
        downButton.classList.add("toggle");
        listItem.classList.add("crypto");
        cryptoRank.classList.add("rank");
        cryptoSymbol.classList.add("symbol");
        cryptoName.classList.add("name");
        cryptoPrice.classList.add("price");
        cryptoChange.classList.add("change");
        cryptoCap.classList.add("capacity");
        subList.classList.add("detailed");
        down.classList.add("down");
        sub4.classList.add("link")

        // plaatst de elementen op juiste plek in dom            
        cryptoSymbol.appendChild(image);
        listItem.appendChild(cryptoRank);    
        listItem.appendChild(cryptoSymbol);
        cryptoSymbol.appendChild(cryptoName);
        listItem.appendChild(cryptoPrice);
        listItem.appendChild(cryptoChange);
        listItem.appendChild(cryptoCap);
        listItem.appendChild(downButton);
        downButton.appendChild(down);       
        listItem.appendChild(subList);
        subList.appendChild(sub1);
        subList.appendChild(sub2);
        subList.appendChild(sub3);
        subList.appendChild(sub4);
             
        // Meer info togglen 
        down.addEventListener('click',function(){
            var detailed = document.querySelector(".detailed");
            var arrow = document.querySelector(".toggle");
            
            detailed.classList.toggle('active');
            arrow.classList.toggle('rotate');
        });
            
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
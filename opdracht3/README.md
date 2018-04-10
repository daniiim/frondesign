# FFD Live cryptocurrency checker voor iPhone 6/6s/7/X (API)
*Use case - Ik wil mobiel snel de crypto koersen checken in het Nederlands en Euro.*

![header](https://danilomerea.github.io/frondesign/opdracht3/assets/a.jpg)

#### 

## iteratie 1  -  API loggen 
Om te controleren of ik data binnen kreeg..

#### 
``` js
var requestURL = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=20';
var request = new XMLHttpRequest(); 

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var cryptoList = request.response;
    console.log(cryptoList);
};
```

## iteratie 2  -  DOM elementen aangemaakt met API data
Om te ontdekken hoe het werkt..

#### 
``` html 
 <main>
            <div class="headlist">
                <ul>
                    <li>#</li>
                    <li>Naam</li>
                    <li>Prijs</li>
                    <li>Dag</li>
                </ul>
            </div>
            <div class="coinlist">
            </div>
        </main>
```

``` json 
{
        "id": "bitcoin", 
        "name": "Bitcoin", 
        "symbol": "BTC", 
        "rank": "1", 
        "price_usd": "6755.91", 
        "price_btc": "1.0", 
        "24h_volume_usd": "4663730000.0", 
        "market_cap_usd": "114640361199", 
        "available_supply": "16968900.0", 
        "total_supply": "16968900.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "0.49", 
        "percent_change_24h": "-4.33", 
        "percent_change_7d": "-8.43", 
        "last_updated": "1523353466", 
        "price_eur": "5484.02887158", 
        "24h_volume_eur": "3785726862.74", 
        "market_cap_eur": "93057937519.0"
    }, 

```

``` javascript 
function showCryptos(jsonObj) {
    var crypto = jsonObj;

        for (var i = 0; i < crypto.length; i++) {
        console.table(crypto[i]);
          
        var cryptoList = crypto[i].rank;  
        var coinList = document.querySelector('.coinlist');
        var cryptoRank = document.createElement('li');
        var cryptoSymbol = document.createElement('li');
        var cryptoPrice = document.createElement('li');
        var cryptoChange = document.createElement('li');
 
        cryptoRank.textContent = [i +1];
        cryptoSymbol.innerHTML = crypto[i].symbol;
        cryptoPrice.innerHTML = crypto[i].price_eur;
        cryptoChange.innerHTML = crypto[i].percent_change_24h; 
        
        for (var j = 0; j < cryptoList.length; j++) {
            var listItem = document.createElement('ul');
            coinList.appendChild(listItem);
        };
          
        listItem.appendChild(cryptoRank);    
        listItem.appendChild(cryptoSymbol);;
        listItem.appendChild(cryptoPrice);
        listItem.appendChild(cryptoChange);
                 
    };
};
```

## iteratie 3  -  Meer elementen met API data in lists + styling
Om nog een beetje te spelen..

#### 

``` css 
body{
    margin: 0;
    padding: 0;  
}
main {
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 5%;
}
.header {
    margin: 0;
    padding: 0;
    margin-top: -15px;
    margin-bottom: -35px;
}
header {
    padding: 20px 20px 5px 20px;;
}
header p {
    margin-top: -10px;
}
.headlist li{
    margin-top: 18px;
    margin-bottom: 18px;
    vertical-align: middle;
}
.crypto {
    border-bottom: 1px solid #ddd;
}
.symbol {
    vertical-align: middle;
}
.rank {
    padding-left: 10px;
    padding-right: 10px;
}

```

``` javascript 
for (var i = 0; i < crypto.length; i++) {
        console.table(crypto[i]);
          
        var price = crypto[i].price_eur;
        var cryptoList = crypto[i].rank;  
        var coinList = document.querySelector('.coinlist');
        var cryptoRank = document.createElement('li');
        var cryptoSymbol = document.createElement('li');
        var cryptoPrice = document.createElement('li');
        var cryptoChange = document.createElement('li');
        var cryptoCap = document.createElement('li');
 
        cryptoRank.textContent = [i +1];
        cryptoSymbol.innerHTML = crypto[i].symbol;
        cryptoPrice.innerHTML = "€ " + price;
        cryptoChange.innerHTML = crypto[i].percent_change_24h + "  %"; 
        cryptoCap.innerHTML = crypto[i].percent_change_7d + "  %";
        
        for (var j = 0; j < cryptoList.length; j++) {
            var listItem = document.createElement('ul');
            coinList.appendChild(listItem);
        };
       
        listItem.classList.add("crypto");
        cryptoRank.classList.add("rank");
        cryptoSymbol.classList.add("symbol");
          
        listItem.appendChild(cryptoRank);    
        listItem.appendChild(cryptoSymbol);;
        listItem.appendChild(cryptoPrice);
        listItem.appendChild(cryptoChange);
        listItem.appendChild(cryptoCap);
                 
    };
```

## iteratie 4->6  -  Fonts, sticky header, icons, kleuren, back to top
Om de interactie voor de gebruiker wat aangenamer te maken..

### Fonts
#### 

``` css 
@montserrat-medium {
   font-family: MontSerrat-Medium;
   src: url(/assets/fonts/Montserrat-Medium.ttf);
}
@montserrat {
   font-family: MontSerrat;
   src: url(/assets/fonts/Montserrat-Regular.ttf);
}
@montserrat-bold {
   font-family: MontSerrat-Bold;
   src: url(/assets/fonts/Montserrat-Bold.ttf);
}
body{
    font-size: 11px;
    font-family: MontSerrat-medium;
    margin: 0;
    padding: 0;  
}
```

### sticky header
#### 

``` css 
.header {
    margin: 0;
    padding: 0;
    margin-top: -15px;
    background-color: #FF9800;
    margin-bottom: -35px;
}
header {
    padding: 20px 20px 5px 20px;;
    color: white;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
}
.scrolled {
    margin-top: 75px;
}
```

``` javascript 
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
```

### icons
#### 

``` javascript
var image = new Image();
image.src = "/assets/images/icons/" +crypto[i].symbol+ ".png"; 
cryptoSymbol.appendChild(image);

```

### kleuren
#### 

``` css 
.positive {
    color: green;
}
.positive::before {
    content: "▲ ";
}
.negative {
    color: red;
}
.negative::before {
    content: "▼ ";
}
```

``` javascript 
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
```

### back to top
#### 
``` html 
    <footer>
        <div class="back">
        </div>
    </footer>
```

``` css 
.back {
    display: none;
}
.back.active {
    display: block;
    background-color: dimgrey;
    opacity: 0.8;
    width: 30px;
    height: 30px;
    position: fixed;
    bottom: 12px;
    right: 12px;
    z-index: 100;
}
.back:before {
    content: '';
    transform: rotate(180deg);
    background:url('../assets/images/down.png');
    background-repeat: no-repeat;
    background-size: 15px;
    margin: -12.5px;
    width: 35px;
    height: 35px;
    display: block;
    z-index: 200;
}
```

``` javascript 
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
```

## iteratie 7 & 8  -  dropdown info (pijltje klikken) + afkorting getallen
Omdat de gebruiker soms toch wat meer wilt weten, maar in eerste oogopslag niet..

### Dropdown
#### 
``` html 

```

``` css 

```

``` javascript 

```

### Getallen afkorten
#### 
``` html 

```

``` css 

```

``` javascript 

```

## iteratie 9  -  Dropdown op hele lijstelement + animaties toegepast
Omdat de gebruiker makkelijker moet kunnen interacteren en ook graag feedback ontvangt..

### Dropdown
#### 
``` html 

```

``` css 

```

``` javascript 

```


## Code en demo
+ Demo; [hier](https://danilomerea.github.io/frondesign/opdracht3/v9/)

  + Demo iteratie 1 [hier](https://danilomerea.github.io/frondesign/opdracht3/v1/)
  + Demo iteratie 2 [hier](https://danilomerea.github.io/frondesign/opdracht3/v2/)
  + Demo iteratie 3 [hier](https://danilomerea.github.io/frondesign/opdracht3/v3/)
  + Demo iteratie 4 [hier](https://danilomerea.github.io/frondesign/opdracht3/v4/)
  + Demo iteratie 5 [hier](https://danilomerea.github.io/frondesign/opdracht3/v5/)
  + Demo iteratie 6 [hier](https://danilomerea.github.io/frondesign/opdracht3/v6/)
  + Demo iteratie 7 [hier](https://danilomerea.github.io/frondesign/opdracht3/v7/)
  + Demo iteratie 8 [hier](https://danilomerea.github.io/frondesign/opdracht3/v8/)


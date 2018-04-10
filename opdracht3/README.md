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
``` html 

```

``` css 

```

``` javascript 

```

## iteratie 4->6  -  Fonts, sticky header, icons, kleuren, back to top
Om de interactie voor de gebruiker wat aangenamer te maken..

### Fonts
#### 
``` html 

```

``` css 

```

``` javascript 

```
### sticky header
#### 
``` html 

```

``` css 

```

``` javascript 

```

### icons
#### 
``` html 

```

``` css 

```

``` javascript 

```

### kleuren
#### 
``` html 

```

``` css 

```

``` javascript 

```

### back to top
#### 
``` html 

```

``` css 

```

``` javascript 

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


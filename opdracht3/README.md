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

```

``` css 

```

``` javascript 

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


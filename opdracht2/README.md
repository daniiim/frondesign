# FFD Kleurenfilter + Carousel voor iPhone 6/6s/7
*Use case - Als ik foto's zoek wil ik kunnen selecteren op kleur om verassende zoekresultaten te krijgen.*

![header](https://danilomerea.github.io/frondesign/opdracht2/assets/a.jpg)

#### 
``` html
        <div class="container slider">
            <div class="swipe">
                <ul class="slideshow">
                    <li class="slide show">
                        <img src="">
                        <p class="indicator">1 / 3</p>
                    </li>
                    <li class="slide">
                        <img src="">
                        <p class="indicator">2 / 3</p>
                    </li>
                    <li class="slide">
                        <img src="">
                        <p class="indicator">3 / 3</p>
                    </li>
                </ul>
             </div>
        </div>
```

## Opdracht 2 - Carousel
![](#)
### iteratie 1  -  slide met arrows 
Hier uitleggen.. omdat meest standaard interactie en click event al eerder gebruikt.

#### 
``` html
        <div class="controls">
                <button class="control previous">&lt;</button>
                <button class="control next">&gt;</button>
        </div>
```

``` css 
.control{
    display: inline-block;
    background: lightgrey;
    color: #fff;
    border: none;
    padding: 8px 12px;
    font-size: 17px;
    cursor: pointer;
    margin: 10px 0px 0px 10px;
    opacity: 0.6;
    border-radius: 2px;
}

.control:hover,
.control:focus{
    background: #eee;
    color: #333;
}

.previous {
    position: absolute;
    left: 10px;
    top: 100px;
    z-index: 10;
}
.next {
    position: absolute;
    right: 19px;
    top: 100px;
    z-index: 10;
}

.indicator {
    position: absolute;
    z-index: 9;
    color: white;
    font-size: 14px;
    font-family: sans-serif;
    top: 0px;
    right: 10px;
}
```

``` javascript 
function volgendeSlide() {
	gaSlide(huidigeSlide + 1);
}
 
function vorigeSlide() {
	gaSlide(huidigeSlide - 1);
}

function gaSlide(n) {
	slides[huidigeSlide].className = 'slide';
	huidigeSlide = (n + slides.length) % slides.length;
	slides[huidigeSlide].className = 'slide show';
}

// click
volgende.addEventListener('click', function () {
    volgendeSlide();
});
 
vorige.addEventListener('click', function () {
    vorigeSlide();
});
```

### iteratie 2->4  -  slide met swipe 
Hier uitleggen.. omdat de gebruiker van een touch device dit toch wel verwacht te kunnen doen.

#### 
``` html
html
```

``` css 
css
```

``` javascript 
js
```

### iteratie 5 & 6  -  slide toetsen
Hier uitleggen.. Omdat ik een extra interactie wilde proberen.

#### 
``` html
html
```

``` css 
css
```

``` javascript 
js
```

### iteratie 7  -  opdracht 1 geimplementeerd
Hier uitleggen.. Om het helemaal compleet te maken en context te geven.

#### 
``` html
html
```

``` css 
css
```

``` javascript 
js
```

## Code en demo
+ Demo; [hier](https://danilomerea.github.io/frondesign/opdracht2/v7/)

  + Demo iteratie 1 [hier](https://danilomerea.github.io/frondesign/opdracht2/v1/)
  + Demo iteratie 2 [hier](https://danilomerea.github.io/frondesign/opdracht2/v2/)
  + Demo iteratie 3 [hier](https://danilomerea.github.io/frondesign/opdracht2/v3/)
  + Demo iteratie 4 [hier](https://danilomerea.github.io/frondesign/opdracht2/v4/)
  + Demo iteratie 5 [hier](https://danilomerea.github.io/frondesign/opdracht2/v5/)
  + Demo iteratie 6 [hier](https://danilomerea.github.io/frondesign/opdracht2/v6/)



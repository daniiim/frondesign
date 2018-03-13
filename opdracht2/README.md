## FFD Opdracht 1 & 2 - Kleurenfilter + Carousel
*Use case - Als ik foto's zoek wil ik kunnen selecteren op kleur om verassende zoekresultaten te krijgen.*

![header](/assets/head.jpg)

## Gridview
![](/assets/2018-03-13%2010.20.46.gif)
### Hoe het werkt
Hier uitleggen..
#### 
``` html
<div class="container main">
    <div class="gallery item active rozeresult">
        <img src="https://images0.persgroep.net/rcs/HXpSwiuA8JF5v4HUgBP2ULmpT8c/diocontent/118272006/_fill/486/324/?appId=f215d2ebdcdad4aa3dc78550c5970d02&quality=0.90">
        <div class="datum">12-05-2017</div>
        <div class="tag">Roze</div>
    </div>
</div>
```

``` css 
.container.main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
}
.rozeresult.active {
    display: block;
    position: relative;
    align-self: flex-start;
    width: 166px;
    height: 120px;
    margin: 5px;
}
.gallery.item img {
    width: 100%;
    height: 120px;
    border-radius: 5px;
    opacity: 0.9;
}

```

``` javascript 
javascript
```

## Dropdown & Filter
![](/assets/2018-03-13%2010.26.16.gif)
### Hoe het werkt
Hier uitleggen..

#### 
``` html
<div class="header item2">
    <div class="container dropdown button">
        <button class="dropdown toggle" type="button" data-toggle="dropdown">Filter </button>
    </div> 
</div>
    <ul class="dropdown-menu">
        <li class="dropitem rozefilter"><a href="#">Roze</a></li>
        <li class="dropitem blauwefilter"><a href="#">Blauw</a></li>
        <li class="dropitem gelefilter"><a href="#">Geel</a></li>
        <li class="dropitem geenfilter"><a href="#">Reset filters</a></li>
    </ul>
```

``` css 
.container .dropdown {
    height: 30px;
    width: 70px;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 5px;
    margin-right: 8px;
}

.container.dropdown:hover{
    background-color: lightgrey;
    color: white;
}

.container.dropdown.active{
    background-color: lightgrey;
    color: white;
}

.dropdown-menu {
    height: 0px;
    width: auto;
    margin: 5px;
    margin-top: -12px;
    overflow: hidden;
    right: 5px;
    left: 5px;
    border-radius: 5px;
    position: fixed;
    z-index: 9;
    background: white;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.4s;
    
}

.dropdown-menu.active {
    height: 145px;
}

.dropdown-menu li {
    list-style-type: none;
    margin-left: -40px;
    padding-top: 10px;
    padding-bottom: 10px;
}

 .dropdown-menu li a{
    width: 100%;
    color: gray;
    padding-left: 18px; 
    text-decoration: none; 
    display: inline-block;
}

li:hover {
    font-weight: 400;
    background: #F9F9FA;
}

li.active {
    font-weight: 700;
}
```

``` javascript 
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
```


## Code en demo
+ Code versies [hier](https://github.com/danilomerea/frondesign/tree/master/opdracht2/)
+ Live demo [hier](https://danilomerea.github.io/frondesign/opdracht2/v7/)
  + Versie 1 [hier](https://danilomerea.github.io/frondesign/opdracht2/v1/)
  + Versie 2 [hier](https://danilomerea.github.io/frondesign/opdracht2/v2/)
  + Versie 3 [hier](https://danilomerea.github.io/frondesign/opdracht2/v3/)
  + Versie 4 [hier](https://danilomerea.github.io/frondesign/opdracht2/v4/)
  + Versie 5 [hier](https://danilomerea.github.io/frondesign/opdracht2/v5/)
  + Versie 6 [hier](https://danilomerea.github.io/frondesign/opdracht2/v6/)



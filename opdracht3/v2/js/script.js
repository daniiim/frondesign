var requestURL = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=70';
var request = new XMLHttpRequest(); 

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var cryptoList = request.response;
    showCryptos(cryptoList);
};

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
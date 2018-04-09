var requestURL = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=20';
var request = new XMLHttpRequest(); 

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var cryptoList = request.response;
    console.log(cryptoList);
};
var section = document.querySelector('main>section.bikes');

var requestURL = 'https://celis123.github.io/term-proyect/data/prices.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var price = request.response;
    showBikes(price);
};


function showBikes(jsonObj) {
    var theBikes = jsonObj['bike'];

    for (var i = 0;i<theBikes.length; i++) {
    if (
    theBikes[i].type == "Mountain Bike" ||
    theBikes[i].type == "Urban" ||
    theBikes[i].type == "Fitness"
    ){
    
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    

    myH2.textContent = theBikes[i].type;
    myPara1.textContent = 'Brand: ' + theBikes[i].Brand;
    myPara2.textContent = 'Price: ' + theBikes[i].price + ' USD';
    myPara3.textContent = 'Specifications: ' + theBikes[i].specifications;


    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);

    section.appendChild(myArticle);
        
    
        }
        else{
            continue;
        }
    }
}
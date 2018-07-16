var section = document.querySelector('main>section.services');

var requestURL = 'https://celis123.github.io/term-proyect/data/services.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var service = request.response;
    showServices(service);
};


function showServices(jsonObj) {
    var theServices = jsonObj['service'];

    for (var i = 0;i<theServices.length; i++) {
    if (
    theServices[i].name == "Check & Tune" ||
    theServices[i].name == "General bike Service" ||
    theServices[i].name == "FULL BIKE SERVICE"
    ){
    
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = theServices[i].name;
    myPara1.textContent = 'Price: ' + theServices[i].price + ' USD';
    myPara2.textContent = 'Details: ' + theServices[i].details;
    myPara3.textContent = 'Specifications: ';
    
    var servicesSpecifications = theServices[i].specifications;
    for (var j = 0; j < servicesSpecifications.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = servicesSpecifications[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
        
    
        }
        else{
            continue;
        }
    }
}
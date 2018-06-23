var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=d9b4dd53b851e70eb542b0473ad439b1&units=imperial', true);


weatherRequest.send();

weatherRequest.onload = function() {
    
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('WDescription').innerHTML = weatherData.list["0"].weather["0"].description;
    document.getElementById('curTemp').innerHTML = weatherData.list["0"].main.temp;
    document.getElementById('high').innerHTML = weatherData.list["0"].main.temp_max;
    document.getElementById('low').innerHTML = weatherData.list["0"].main.temp_min;
    document.getElementById('speed').innerHTML = weatherData.list["0"].wind.speed;
    var iconcode = weatherData.list["0"].weather["0"].icon;
    var icon_path= "https://openweathermap.org/img/w/" + iconcode+ ".png";
    document.getElementById('weatherIco').src = icon_path;
}
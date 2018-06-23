let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=d9b4dd53b851e70eb542b0473ad439b1', true);

weatherRequest.send();

weatherRequest.onload = function() {
    
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('WDescription').innerHTML = weatherData.weather.id;
    document.getElementById('curTemp').innerHTML = weatherData.main.temp;
    document.getElementById('high').innerHTML = weatherData.main.temp_max;
    document.getElementById('low').innerHTML = weatherData.main.temp_min;
    document.getElementById('weatherIco').src = weatherData.weather.icon;
    document.getElementById('todayPrecipitacion').innerHTML = weatherData.rain.3h;
    document.getElementById('speed').innerHTML = weatherData.wind.speed;
    document.getElementById('WindDirection').innerHTML = weatherData.wind.deg;
}
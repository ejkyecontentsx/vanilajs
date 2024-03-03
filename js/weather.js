const cityspan = document.querySelector("#weather span:first-child");
const weatherspan = document.querySelector("#weather span:last-child");


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const APIKEY = '6373f72449adde3bbfd0693dfbce66fa';

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`;

    console.dir(url);
    fetch(url).then(response => response.json())
    .then(data => { 

        console.dir(data);
        const city = data.name;
        const weather = `[ ${data.weather[0].main}, ${data.main.temp}°C ]`;

        cityspan.innerText = city;
        weatherspan.innerText = weather;
    });

}

function onGeoError(){
    alert("Can't find you location.");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
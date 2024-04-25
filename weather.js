const inputbox = document.querySelector('.inputbtn');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temp');
const city = document.querySelector('.city');
const wind = document.getElementById('winds');
const location_not_found = document.querySelector('.location-not-found');
const humidity = document.getElementById('humiditys');
const weather_body = document.querySelector('.weather');
 async function checkWeather(city) {
    const api_key = "d39ed541a5fd388f6e3cb9cf7192d8f8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}` ;
    const weather_data = await fetch(`${url}`).then(Response => Response.json());

    if( weather_data.cod == `404`){
        location_not_found.style.display="flex" ;
        weather_body.style.display = "none" ;
        console.log("error");
        return;
    }

    // console.log(weather_data);
    location_not_found.style.display="none";
    weather_body.style.display = "flex" ;
    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    city.innerHTML= `${weather_data.main.city}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.main.wind.speed}Km/h`;
    switch(weather_data.weather[0].main) {
        case 'clouds' :
            weather_img.src="clouds.png" ;
        break;
            case 'clear':
            weather_img.src="clear.png" ;
        break;
            case 'mist' :
            weather_img.src="mist.png" ;
        break;
            case 'drizzle' :
            weather_img.src="drizzle.png" ;        break;
    }

}
console.log(weather_data);

searchbtn.addEventListener('click', ()=>{
    checkweather(inputbox.value);
});
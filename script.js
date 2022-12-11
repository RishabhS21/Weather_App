const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7ab53b809fmshcb042d550b32e93p113e27jsnfec8f6a288e3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            console.log(response)
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
kolkata.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather('Kolkata')
})
mumbai.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather('Mumbai')
})

cochin.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather('Cochin')
})

getWeather('New Delhi')

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
.then(response => response.json())
.then(response => {
    stemp.innerHTML = response.temp
    shumidity.innerHTML = response.humidity
    smin_temp.innerHTML = response.min_temp
    smax_temp.innerHTML = response.max_temp
    swind_speed.innerHTML = response.wind_speed
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
.then(response => response.json())
.then(response => {
    ttemp.innerHTML = response.temp
    thumidity.innerHTML = response.humidity
    tmin_temp.innerHTML = response.min_temp
    tmax_temp.innerHTML = response.max_temp
    twind_speed.innerHTML = response.wind_speed
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
.then(response => response.json())
.then(response => {
    ntemp.innerHTML = response.temp
    nhumidity.innerHTML = response.humidity
    nmin_temp.innerHTML = response.min_temp
    nmax_temp.innerHTML = response.max_temp
    nwind_speed.innerHTML = response.wind_speed
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
.then(response => response.json())
.then(response => {
    ltemp.innerHTML = response.temp
    lhumidity.innerHTML = response.humidity
    lmin_temp.innerHTML = response.min_temp
    lmax_temp.innerHTML = response.max_temp
    lwind_speed.innerHTML = response.wind_speed
})
.catch(err => console.error(err));
var inputSearch = document.querySelector('.txt-input');
var lblCity = document.querySelector('.lbl-city');
var lblCountry = document.querySelector('.lbl-country');
var lblDateTime = document.querySelector('.lbl-datetime');
var lblTem = document.querySelector('.lbl-tem');
var lblDes = document.querySelector('.lbl-des');
var lblEye = document.querySelector('.lbl-eye');
var lblWindy = document.querySelector('.lbl-win');
var lblSet = document.querySelector('.lbl-set');
var weather = document.querySelector('.weather');
var wrapper = document.querySelector('.wrapper');
var weatherContent = document.querySelector('.weather__content');

inputSearch.addEventListener("keypress", function (e) {
    if (e.code == "Enter") {
        let value = inputSearch.value.trim()
        weatherContent.classList.remove("hide");
        changeWeatherUI(value);
    }
})

async function changeWeatherUI(value) {


    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

    let res = await fetch(apiURL);

    let data = await res.json();


    lblCity.innerHTML = data.name
    lblCountry.innerHTML = data.sys.country
    lblDateTime.innerHTML = new Date().toLocaleString()
    lblTem.innerHTML = Math.round(data.main.temp)
    lblDes.innerHTML = data.weather[0].main
    lblEye.innerHTML = data.visibility + "(m)"
    lblWindy.innerHTML = data.wind.speed + "(m/s)"
    lblSet.innerHTML = data.clouds.all + "(m)"


    let tem = data.main.temp

    if (tem < 25) {
        wrapper.classList.add("cold");
        weather.classList.add("cold");
    } else {
        wrapper.classList.remove("cold");
        weather.classList.remove("cold");
    }
}

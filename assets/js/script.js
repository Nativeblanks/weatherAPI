
var city = "Winston Salem"
var lat = "";
var lng = "";

var APIkey= "6f837410a6ed9afd5f58acd306a547dc"

var forecastDisplay = $("#weatherFiveDay");
var currentWeatherDisplay = $("#display-current-weather");
var weatherSideBar = $('#weatherSideBar')

var now = moment();

var savedTextInputs = ['Winston Salem']

var saveBtn = $('#saveBtn');

var inputlocation = $('#inputArea')

saveBtn.click(function() {
    console.log('button works')
    city = $('#inputArea').val();
    console.log( "this was typed " + city)

    localStorage.setItem("savedCities", city)
    // weatherAPICall();
});


    for (let i =0; i < localStorage.length; i++) {
        const entry = localStorage.key(i);

        weatherSideBar.innerHTML += `${entry} <br />`;
        
    }

// function addToSavedList (city) {
//     savedTextInputs.push(city.name)
//     storeCities();
// }



// function storeCities() {
//     localStorage.setItem("savedCities", JSON.stringify(savedTextInputs));
// };

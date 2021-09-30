let APIKey = 'd1afd0caeb1fc3d393c01c04392010a1'
let searchEl = document.querySelector('#search-form')
let searchResEl = document.querySelector('#search-column')
let currentWeatherResult = document.querySelector('#current-weather-result') 
let nameEl = document.querySelector('.name')
let tempEl = document.querySelector('.temp')
let windEl = document.querySelector('.wind')
let humidityEl = document.querySelector('.humidity')
let uvIndexEl = document.querySelector('.uvIndex')
let weatherIconEl = document.querySelector('.weather-icon')
let fiveDayResult1 = document.querySelector('.five-day1')
let fiveDayResult2 = document.querySelector('.five-day2')
let fiveDayResult3 = document.querySelector('.five-day3')
let fiveDayResult4 = document.querySelector('.five-day4')
let fiveDayResult5 = document.querySelector('.five-day5')

function dailyWeatherDisplay() {

}

function getCurrentWeather() {
    let inputValue = document.getElementById('user-input').value
    let city = JSON.stringify(inputValue).replace(/^["'](.+(?=["']$))["']$/, '$1')

    let queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e366591e2218a06fb0cdcbe8a624438c';

    fetch(queryUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    // get longitude and latitude to input into one call
                    let long = data.coord.lon
                    let lat = data.coord.lat
                    let nameValue = data.name
                    searchApi();
                    function searchApi() {
                        let queryUrl2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&appid=e366591e2218a06fb0cdcbe8a624438c';

                        fetch(queryUrl2)
                            .then(function (response) {
                                console.log(response)
                                response.json().then(function (data) {
                                    console.log(data)
                                    let tempValue = data.current.temp
                                    let windValue = data.current.wind_speed
                                    let humidityValue = data.current.humidity
                                    let indexValue = data.current.uvi
                                    const icon = data.current.weather[0].icon

                                    nameEl.textContent = nameValue
                                    tempEl.textContent = 'Temp: ' + tempValue + '°F'
                                    windEl.textContent = 'Wind: ' + windValue + 'MPH'
                                    humidityEl.textContent = 'Humidity: ' + humidityValue + '%'
                                    uvIndexEl.textContent = 'UV Index: ' + indexValue
                                    weatherIconEl.innerHTML = '<img class="weatherimg" src="./Assets/icons/' + icon + '.png">'

                                    if (indexValue < 3) {
                                        uvIndexEl.style.backgroundColor = '#77dd77'
                                    } else if (indexValue > 3 && indexValue < 5) {
                                        uvIndexEl.style.backgroundColor = 'yellow'
                                    } else {
                                        uvIndexEl.style.backgroundColor = '#ff6961'
                                    }
                                })

                            })
                    };
                })
            } else {
                alert('Error' + response.statusText);
            }
        })

}

function getFutureWeather() {
    let inputValue = document.getElementById('user-input').value
    let city = JSON.stringify(inputValue).replace(/^["'](.+(?=["']$))["']$/, '$1')

    let queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e366591e2218a06fb0cdcbe8a624438c';

    fetch(queryUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    // get longitude and latitude to input into one call
                    let long = data.coord.lon
                    let lat = data.coord.lat
                    searchApi();
                    function searchApi() {
                        let queryUrl2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&appid=e366591e2218a06fb0cdcbe8a624438c';

                        fetch(queryUrl2)
                            .then(function (response) {
                                console.log(response)
                                response.json().then(function (data) {
                                    console.log(data)
                                        // start at second term in array so it doesn't include current weather
                                        let day1icon = document.querySelector('.w-icon1')
                                        let day1temp = document.querySelector('.t1')
                                        let day1wind = document.querySelector('.w1')
                                        let day1humid = document.querySelector('.hu1')

                                        let day2icon = document.querySelector('.w-icon2')
                                        let day2temp = document.querySelector('.t2')
                                        let day2wind = document.querySelector('.w2')
                                        let day2humid = document.querySelector('.hu2')

                                        let day3icon = document.querySelector('.w-icon3')
                                        let day3temp = document.querySelector('.t3')
                                        let day3wind = document.querySelector('.w3')
                                        let day3humid = document.querySelector('.hu3')

                                        let day4icon = document.querySelector('.w-icon4')
                                        let day4temp = document.querySelector('.t4')
                                        let day4wind = document.querySelector('.w4')
                                        let day4humid = document.querySelector('.hu4')

                                        let day5icon = document.querySelector('.w-icon5')
                                        let day5temp = document.querySelector('.t5')
                                        let day5wind = document.querySelector('.w5')
                                        let day5humid = document.querySelector('.hu5')

                                        let icon1 = data.daily[1].weather[0].icon
                                        let temp1 = data.daily[1].temp.day
                                        let wind1 = data.daily[1].wind_speed
                                        let humidity1 = data.daily[1].humidity

                                        let icon2 = data.daily[2].weather[0].icon
                                        let temp2 = data.daily[2].temp.day
                                        let wind2 = data.daily[2].wind_speed
                                        let humidity2 = data.daily[2].humidity

                                        let icon3 = data.daily[3].weather[0].icon
                                        let temp3 = data.daily[3].temp.day
                                        let wind3 = data.daily[3].wind_speed
                                        let humidity3 = data.daily[3].humidity

                                        let icon4 = data.daily[4].weather[0].icon
                                        let temp4 = data.daily[4].temp.day
                                        let wind4 = data.daily[4].wind_speed
                                        let humidity4 = data.daily[4].humidity

                                        let icon5 = data.daily[5].weather[0].icon
                                        let temp5 = data.daily[5].temp.day
                                        let wind5 = data.daily[5].wind_speed
                                        let humidity5 = data.daily[5].humidity

                                        day1icon.innerHTML = '<img class="weatherimg" src="./Assets/icons/' + icon1 + '.png">'
                                        day1temp.textContent = 'Temp: ' + temp1 + '°F'
                                        day1wind.textContent = 'Wind: ' + wind1 + 'MPH'
                                        day1humid.textContent = 'Humidity: ' + humidity1 + '%'

                                        day2icon.innerHTML = '<img class="weatherimg" src="./Assets/icons/' + icon2 + '.png">'
                                        day2temp.textContent = 'Temp: ' + temp2 + '°F'
                                        day2wind.textContent = 'Wind: ' + wind2 + 'MPH'
                                        day2humid.textContent = 'Humidity: ' + humidity2 + '%'

                                        day3icon.innerHTML = '<img class="weatherimg" src="./Assets/icons/' + icon3 + '.png">'
                                        day3temp.textContent = 'Temp: ' + temp3 + '°F'
                                        day3wind.textContent = 'Wind: ' + wind3 + 'MPH'
                                        day3humid.textContent = 'Humidity: ' + humidity3 + '%'

                                        day4icon.innerHTML = '<img class="weatherimg" src="./Assets/icons/' + icon4 + '.png">'
                                        day4temp.textContent = 'Temp: ' + temp4 + '°F'
                                        day4wind.textContent = 'Wind: ' + wind4 + 'MPH'
                                        day4humid.textContent = 'Humidity: ' + humidity4 + '%'

                                        day5icon.innerHTML = '<img class="weatherimg" src="./Assets/icons/' + icon5 + '.png">'
                                        day5temp.textContent = 'Temp: ' + temp5 + '°F'
                                        day5wind.textContent = 'Wind: ' + wind5 + 'MPH'
                                        day5humid.textContent = 'Humidity: ' + humidity5 + '%'
                                })
                            })
                    };         
                })
            } else {
                alert('Error' + response.statusText);
            }
        })                           
}

function searchHistory() {
    // for each new user input create a card
    let inputValue = document.getElementById('user-input').value


    for (let i = 0; i < inputValue.length-6; i++) {
        let searchValue = localStorage.getItem('searchTerm')
        let displayBox = document.createElement('div')
        displayBox.classList = 'list-item flex-row justify-space-between align-center'
        displayBox.setAttribute('style', 'background-color: #d3d3d3; position: relative; top: 1rem; border-radius: 3px;')
        let search = document.createElement('span')
        search.setAttribute('style', 'padding: 3px; text-align: center;')
        search.textContent = searchValue
        displayBox.appendChild(search)
        searchResEl.appendChild(displayBox)

        localStorage.setItem('searchTerm', inputValue)
        displayBox.addEventListener('click', function() {
            getCurrentWeather(search.value)
        })
    }
}

function SearchFormSubmit(event) {
    event.preventDefault();

    let inputValue = document.getElementById('user-input').value
    console.log(inputValue)
    if (!inputValue) {
        console.error('You need to input a search term!')
        return;
    }
    getCurrentWeather(inputValue);
    getFutureWeather(inputValue);
    searchHistory(inputValue)
}

searchEl.addEventListener('submit', SearchFormSubmit);


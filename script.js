const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b807d69096mshc0a78b721ac98f3p199009jsn37dbe887b39b',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

const getWeatherData = async (city) => {
  const URL = "https://ai-weather-by-meteosource.p.rapidapi.com/daily";
   const okURL= `${URL}?place_id=${city}&language=en&units=auto`;

const weatherRes=fetch(okURL, options);
	return weatherRes.then((response) => {
   
    return response.json()
  })


}

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  

  getWeatherData(city)
    .then((data)=>{
    showWeatherData(data);
  }).catch((error)=>{
    console.log(error);
  })
  
}


const showWeatherData = (data) => {


  document.getElementById('city-name').innerText=document.getElementById('city-input').value;
  document.getElementById('weather-type').innerText=data.daily.data[0].weather;
document.getElementById('temp').innerText=data.daily.data[0].temperature;
document.getElementById('min-temp').innerText=data.daily.data[0].temperature_min;
document.getElementById('max-temp').innerText=data.daily.data[0].temperature_max;
}
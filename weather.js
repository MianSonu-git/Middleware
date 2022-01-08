var axios = require("axios").default;
const getWeatherData =(city)=>{
    var options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
          q: city,
          lat: '0',
          lon: '0',
          callback: '',
          id: '2172797',
          lang: 'null',
          units: 'metric',
          mode: 'json'
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': '4f191f8d8cmsh2be3808d5986143p1cabc6jsn38a2aed72f54'
        }
      };
    const Response = axios.request(options);
    var weatherData = Response.then(items => items);
    return weatherData.then(colletion => colletion.data);
}


    // axios.request(options).then(function (response) {
    // var objectHolder = [];
    // objectHolder = response.data;  
    // }).catch(function (error) {
    // console.error(error);
    // })


module.exports= {
    getWeatherData
};
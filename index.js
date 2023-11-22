const getCoord = require("./getCoord");
const getWeather = require("./getWeather");

const getMeteo = (address) => {
  getCoord(city)
    .then((coord) => getWeather(coord))
    .then(({current: weather}) => {
      console.log(`Météo à ${address} :`);
      console.log(`- Température : ${weather.temperature_2m}°C`);
      console.log(`- Humidité : ${weather.relative_humidity_2m}%`);
      console.log(`- Risque de pluie : ${weather.precipitation_probability}%`);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("Au revoir !");
    });
}

module.exports = {getMeteo, getCoord, getWeather};

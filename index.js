const getCoord = require("./getCoord");
const getWeather = require("./getWeather");
const city = process.argv[2] || "Paris";

getCoord(city)
  .then((coord) => getWeather(coord))
  .then(({current: weather}) => {
    console.log(`Météo à ${city} :`);
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


async function getCoord(city) {
    try{
        const res = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${city}`);
        const data = await res.json();
        const [lon, lat] = data.features[0].geometry.coordinates;
        console.log(`Coordonnées de ${city} :`);
        console.log(`- Latitude : ${lat}`);
        console.log(`- Longitude : ${lon}`);
        return { lat, lon };
    } catch (err) {
        console.error(err);
    }
}

module.exports = getCoord;
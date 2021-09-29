function bigCities(arr) {
    return arr.filter(city => city.population >= 100000);
}
function smallCities(arr) {
    return arr.filter(city => city.population < 100000);
}

module.exports = { bigCities, smallCities };
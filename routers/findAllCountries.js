const getCountries = require('../services/getAllCountriesService');

const findCountries = (app) => {
    app.get('/find', (req, res) => {
        getCountries(req, res); 
    });
}

module.exports = findCountries;

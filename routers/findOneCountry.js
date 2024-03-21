const getCountryService = require('../services/getOneCountryService');

const getOneCountry = (app) => {
    app.get('/details/:countryName', async (req, res) => {
        try {
            const countryName = req.params.countryName;
            const countryDetails = await getCountryService.getCountryDetails(countryName);
            res.render('country', { data: countryDetails });
        } catch (error) {
            console.error('Error rendering country details:', error);
            res.status(500).send('Error rendering country details');
        }
    });
};

module.exports = getOneCountry;

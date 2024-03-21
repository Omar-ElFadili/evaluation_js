const axios = require('axios');
require('dotenv').config();
const apiUrl = process.env.API_URL;

module.exports = async (req, res) => {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data; // Supposons que les données sont au format JSON
        res.render('index', { data }); // Rendu du template EJS avec les données
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
};

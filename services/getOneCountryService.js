const axios = require('axios');
const apiUrl = process.env.API_URL;

// Fonction pour récupérer les détails d'un pays spécifique par son nom
const getCountryDetails = async (countryName) => {
    try {
        const response = await axios.get(apiUrl);
        const country = response.data.find(country => country.name.official === countryName);
        return country;
    } catch (error) {
        console.error('Error fetching country details:', error);
        throw error; // Remonter l'erreur pour la gérer au niveau supérieur si nécessaire
    }
};

module.exports = { getCountryDetails };


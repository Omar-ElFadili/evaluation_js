require('dotenv').config(); // Charger les variables d'environnement

const express = require('express');
const findCountries = require('./routers/findAllCountries.js');
const findOneCountry = require('./routers/findOneCountry.js');
const PORT = 3000;
const app = express();

// Définir le répertoire des vues
app.set('views', './views');

// Définir le moteur de modèle à utiliser (EJS dans ce cas)
app.set('view engine', 'ejs');

app.use(express.static('public'));

findCountries(app);
findOneCountry(app);
app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
});

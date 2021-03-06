require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

app.use(require('./controllers/usuario'));



/*mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) throw err;
    console.log("Base de datos ONLINE!!!");
});*/


mongoose.connect(process.env.urlDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de Datos ONLINE ', process.env.urlDB);
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', process.env.PORT);
});
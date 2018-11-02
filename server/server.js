require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())



/*Obtener data */
app.get('/usuario', function(req, res) {
    //res.send('Hello World')
    res.json('get usuario');
});

/* Insertar new Data*/
app.post('/usuario', function(req, res) {

    let body = req.body;
    //res.send('Hello World')

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            body
        });
    }


});

/* Actualizar Data */
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    //res.send('Hello World')
    res.json({
        "type": "PUT",
        id
    });
});

/* Borrar Data */
app.delete('/usuario', function(req, res) {
    //res.send('Hello World')
    res.json('delete usuario');
});


app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', process.env.PORT);
});
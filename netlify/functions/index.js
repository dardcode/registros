const express = require('express');
const app = express();
const serverless = require('serverless-http');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
    const datos = {
        nombre: 'Juan',
        frutas: ['manzana', 'banana', 'pera']
    };
    res.render('index', datos);
});

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

module.exports.handler = serverless(app);

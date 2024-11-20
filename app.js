const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    const datos = {
        nombre: 'Juan',
        frutas: ['manzana', 'banana', 'pera']
    };
    res.render('index', datos);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

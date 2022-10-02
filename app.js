const platosRouter = require('./src/routes/platosRouter');

const express = require('express');
const path = require('path');

const app = express();

app.use('/', platosRouter);  // se concatenan las rutas del primer y segundo parámetro 

app.use(express.static(path.resolve(__dirname, './public')));

app.set('view engine', 'ejs')

app.listen(3002, () => {
    console.log("Servidor corriendo");
});


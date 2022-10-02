const router = require('./src/routes/router');

const express = require('express');
const path = require('path');

const app = express();

app.use('/', router); 

app.use(express.static(path.resolve(__dirname, './public')));

app.set('view engine', 'ejs')

app.listen(4000, () => {
    console.log("Servidor corriendo");
});


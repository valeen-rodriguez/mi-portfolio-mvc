const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mainRouter = require('./routers/mainRouter.js');
const aboutRouter = require('./routers/aboutRouter.js');

app.use('/', mainRouter);
app.use('/about', aboutRouter);

app.listen(3000, () => {
    console.log('Servidor funcionando');
});
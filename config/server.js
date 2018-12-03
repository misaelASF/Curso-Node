/* importar o modulo do framework express */
const express = require('express');

/* importar o modulo consign */
const consign = require('consign');

/* importar o modulo body-parser */
const bodyParser = require('body-parser');

/* importar o modulo do express-validator */
const validator = require('express-validator');

/* iniciar o objeto do express */
const app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware do express.static */
app.use(express.static('./app/public'));

/* configurar o middleware do body-parser */
app.use(bodyParser.urlencoded({ extended: true }));

/* configurar o middleware express-validator */
app.use(validator());

/* efetuar o autload das rotas, models, controllers */
consign()
       .include('app/routes')
       .then('app/models')
       .then('app/controllers')
       .into(app);

/* exportar o objeto do app */
module.exports = app;
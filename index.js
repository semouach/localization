var express = require('express');
var exphbs  = require('express-handlebars');
var translations = require('./translations.json')

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});


app.get('/:lang?', function (req, res) {
    const lang = req.params.lang
    res.send(`${translations[lang].pageTitle}`);
});





app.listen(3001);

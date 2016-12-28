var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var path = require('path')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('home');
});

app.get('/home', function (req, res) {
    res.render('home');
});

app.get('/restaurant', function (req, res) {
    res.render('restaurant');
});

app.get('/rooms', function (req, res) {
    res.render('rooms');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.get('/menu', function (req, res) {
    res.render('menu');
});


app.listen(process.env.PORT || 3000);

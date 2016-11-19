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


app.listen(process.env.PORT || 3000);

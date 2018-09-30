var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "res_db"
  });
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//uses public folder
app.use(express.static(__dirname + '/public'));

//brings in ejs view engine
app.set('view engine', 'ejs');

app.get('/', function(req, res) {                   //home page
	res.render('pages/index');
});

var idea1Routes = require('./routes/ideas.js');
app.use('/result', idea1Routes);

app.get('/ideas', function(req, res){
    connection.query('SELECT * FROM ideas', function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
});

var submitRoutes = require('./routes/add-info.js');
app.use('/date-form', submitRoutes);


app.get("/date-form-fail", function(req, res) {
  res.render("pages/date-form-fail");
});

app.get("/date-form-success", function(req, res) {
  res.render("pages/date-form-success");
});


app.listen(3001);
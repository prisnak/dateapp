var express = require('express');
var app = express();
var router = express.Router();

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

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

router.get('/:price', function(req, res) {
    connection.query('SELECT * FROM ideas WHERE price = ?',
    [req.params.price],
    function (error, results, fields) {
        if (error) throw error;
        function random(x){
            return Math.floor(Math.random() * x) ;
        }
        var randomR = results[random(results.length)];
        console.log(randomR);
      //this displays the activity of whatever the user picked from 
      // res.json("Activity: " + randomR.activity + " \n Description " + randomR.description);
        res.render('pages/result', {result: randomR.activity, des: randomR.description, link: randomR.web_link});
    });
});

var finalR, finalD, finalL;

router.get('/:price/:category', function(req, res) {
    connection.query('SELECT * FROM ideas WHERE price = ? AND category = ?',
    [req.params.price, req.params.category],
    function (error, results, fields) {
      if (error) throw error;
      for (var i=0; i < results.length; i++){
            finalR = results[i].activity;
            finalD = results[i].description;
            finalL = results[i].web_link;
            console.log('this is the final result: ' + finalR);
      }
      //this displays the activity of whatever the user picked from 
      // res.json("Activity: " + randomR.activity + " \n Description " + randomR.description);
      res.render('pages/result-2', {result: finalR, des: finalD, link: finalL});
    });
});

module.exports = router;
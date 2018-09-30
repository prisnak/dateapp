var express = require("express");
var mysql = require("mysql");
var router = express.Router();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "res_db"
});

// /submit GET
router.get("/", function(req, res) {
  res.render("pages/date-form");
});

// /submit/take-in-post-info POST
router.post("/take-in-post-info", function(req, res) {
  var web_link = req.body.web_link;
  var activity = req.body.activity;
  var price = req.body.price;
  var category = req.body.category;
  var description = req.body.description;
  if (web_link == "") {
    web_link = "NULL";
  }
  checkForm();

  function checkForm() {
    var ob = {};

    if (activity.length >= 3 &&
      price.length >= 1 &&
      category.length >= 3 &&
      description.length >= 3
    ) {
      ob = Object.assign(req.body, { activity: `${activity}` });
      ob = Object.assign(req.body, { price: `${price}` });
      ob = Object.assign(req.body, { category: `${category}` });
      ob = Object.assign(req.body, { description: `${description}` });
      console.log(ob);
      console.log(req.body);
      updateDB();
    } else {
      console.log("it failed!");
      res.redirect("/date-form-fail");
      console.log(`activity: ${activity.length > 3}`);
      console.log(`price: ${price.length > 1}`);
      console.log(`category: ${category.length > 3}`);
      console.log(`description: ${description.length > 3}`);
    }
  };

  function updateDB() {
    var query = connection.query(
      `INSERT INTO ideas (price, activity, category, description, web_link)
  			  VALUES ('${price}', '${activity}', '${category}', '${description}', '${web_link}')`,
      function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("done!");
          res.redirect("/date-form-success");
        }
      }
    );
  }
});

module.exports = router;

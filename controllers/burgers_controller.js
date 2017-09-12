var express = require("express");
var router = express.Router();
var db = require("../models");



router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

router.post("/", function(req, res){
    db.Burger.create({
      burger_name: req.body.name,
      devoured: req.body.devoured
    }).then(function(data){
    
      res.redirect("/");
    });
  });

  
router.put("/:id", function(req, res){
    db.Burger.update({
      devoured: req.body.devoured
     },{
       where:{
         id: req.params.id
       }
     }).then(function(data){
    res.redirect("/");
    });
});

  module.exports = router;

  
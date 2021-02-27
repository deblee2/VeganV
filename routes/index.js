var express = require('express');
var router = express.Router();

const models=require('./../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  models.raw_material.findAll()
      .then(result =>{
        res.json(result);
      })
      .catch(function(err){
        console.log(err);
      });
});

module.exports = router;

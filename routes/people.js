const router = require('express').Router();
const Person = require('../models/person');

router.get('/hometown', function (req, res) {
  // dataFromTheDatabase is the list of documents that match the query
  // all the people in the database
  console.log('get req', req);
  Person.find({}).sort({ hometown: 1 }).then(function (dataFromTheDatabase) {
    console.log('Documents from mongo', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

router.get('/movie', function (req, res) {
  console.log('get req', req);
  Person.find({}).sort({ movie: 1 }).then(function (dataFromTheDatabase) {
    console.log('Documents from mongo', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

router.get('/', function (req, res) {
  console.log('get req', req);
  Person.find({}).sort({ name: 1 }).then(function (dataFromTheDatabase) {
    console.log('Documents from mongo', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

router.post('/', function (req, res) {
  var name = req.body.name;
  var hometown = req.body.hometown;
  var movie = req.body.movie;
  console.log('name', name);
  var personToSave = new Person({ name: name, hometown: hometown, movie: movie });
  personToSave.save().then(function () {
    console.log('saved a new person');
    res.send(201);
  });
});

module.exports = router;

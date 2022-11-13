const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// -------------------
// Parser set up

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

// -------------------
// database set up

const mongoose=require('mongoose');
const { request } = require('http');

const mongoURL='mongodb+srv://admin:adminpass@alphacluster.8ddek3r.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    console.log("Connected to MongoDB");
    }
);

// ------------------
// start setting enpoints

app.set('view engine', 'ejs');

// home page, directory
router.get('/', function(req, res) {
    res.render('index');
  });

// passing json data to frontend
const author = {
    name : 'Geeksforgeeks',
    skills: ['DSA', 'Interview Experience', 'Web Developement', 'Puzzels',]
}
router.get('/access', function(req, res) {
    // render method takes two parameters
    // first parameter should be the .ejs file
    // second parameter should be an object
    // which is accessible in the .ejs file  
    // this .ejs file should be in views folder 
    // in the root directory.
    res.render('access', {author:author});
})

// create a page that get 1 form input from user
router.get('/form', function(req, res) {
    res.render('form');
  });

// access 1 value input from POST method, then pass to another frontend
router.post('/input',urlencodedParser, function (req, res) {
    console.log(req.body.user_name)
    res.render('input',{user: req.body});
});

// dynamic ejs with stopwatch
router.get('/stopwatch', function(req, res) {
  res.render('stopwatch');
});

// dynamic ejs with stopwatch
router.get('/donuts', function(req, res) {
  res.render('donuts');
});




//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
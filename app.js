// ------------------
// base constant declaration
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

// -----------------
// app.set
app.set('view engine', 'ejs');

// current user
let curruser;

// ------------------
// start setting enpoints
// login page
router.get('/', function(req, res) {
    res.render('login');
});

// signup page
router.get('/signup', function(req, res){
    res.render('signup')
})

// user home page
router.post('/home',urlencodedParser, function (req, res) {
    const input = req.body
    curruser = input.username
    // 2 lines below would be deleted in real life application
    console.log('username entered: ' +input.username)
    console.log('password entered: ' +input.password)

    // if 
    // check user is not in the database redirect to signup page

    // else
    // retrieve the user information and list of workouts 
    // pass retrival to the front end as JSON
    
    res.render('home',{user: req.body});
});

// view workout page (no post)
router.get('/viewworkout', function(req, res){
    res.render('viewworkout')
})

// start workout page (timer)

// Create/edit workout page
router.get('/addworkout', function(req, res){
    res.render('addworkout')
})

// add exercise page

// student page
router.get('/students', function(req, res){
    res.render('students')
})

// notification page
router.get('/notification', function(req, res){
    res.render('notification')
})

// search page 
router.get('/search', function(req, res){
    res.render('search')
})


app.use('/', router);
app.listen(process.env.port || 3000);


console.log('Running at Port 3000');
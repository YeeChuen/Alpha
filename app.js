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
let curruser=null;

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
if (curruser == null){
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
    
}
else{
    router.get('/home', function(req, res){
        res.render('home', {user: req.body})
    })
}

// view workout page (no post)
router.get('/viewworkout', function(req, res){
    res.render('viewworkout')
})

// Mock workout data
const benchpress1 = {exerciseCode: "E1", name: "benchpress", weights: 10, reps: 10, restTime: 10}
const benchpress2 = {exerciseCode: "E2", name: "benchpress", weights: 20, reps: 8, restTime: 10}
const benchpress3 = {exerciseCode: "E3", name: "benchpress", weights: 30, reps: 6, restTime: 10}
const squat1 = {exerciseCode: "E4", name: "squat", weights: 30, reps: 10, restTime: 10}
const squat2 = {exerciseCode: "E5", name: "squat", weights: 40, reps: 8, restTime: 10}
const squat3 = {exerciseCode: "E6", name: "squat", weights: 50, reps: 6, restTime: 10}
const workoutdata1 = {workoutCode: "W1", ownerID: "012", 
exercises: [benchpress1, benchpress2, benchpress3, squat1, squat2, squat3], 
workoutName: "upper+lower"}
const workoutdata2 = {workoutCode: "W2", ownerID: "012", 
exercises: [benchpress1, benchpress2, benchpress3], 
workoutName: "upper+lower"}
const userdata1 = {name: "qwer", username: "qwer", email:"qwer@gmail.com",
password: "1234", workouts: [workoutdata1,workoutdata2], isAdmin: false}

// start workout page (timer)
router.get('/startworkout', function(req, res){
    res.render('startworkout', {workout: workoutdata1})
})

// end workout page (timer)
router.get('/endworkout', function(req, res){
    res.render('endworkout')
})

// Create/edit workout page
router.get('/addworkout', function(req, res){
    res.render('addworkout')
})

// add exercise page
router.get('/addexercise', function(req, res){
    res.render('addexercise')
})

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
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

// ------------------
// start setting enpoints
// home page, directory
router.get('/', function(req, res) {
    res.render('index');
  });

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const bodyParser = require('body-parser');

const mongoose=require('mongoose');

const mongoURL='mongodb+srv://admin:adminpass@alphacluster.8ddek3r.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    console.log("Connected to MongoDB");
    }
);

app.use(bodyParser.urlencoded({ extended: true }));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/frontend/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/frontend/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/frontend/sitemap.html'));
});

router.get('/form',function(req,res){
    res.sendFile(path.join(__dirname+'/frontend/form.html'));
});

router.get('/test',function(req,res){
    res.sendFile(path.join(__dirname+'/frontend/test.html'));
});

  
router.post('/form', function (req, res) {
    const input = req.body
    console.log(input.user_password)
    res.sendFile(path.join(__dirname+'/frontend/input.html', 
    {    user_name: input.user_name,
        user_password: input.user_password }));

});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
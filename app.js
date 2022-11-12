const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const mongoose=require('mongoose');

const mongoURL='mongodb+srv://admin:adminpass@alphacluster.8ddek3r.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
);

app.use(express.json);

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

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
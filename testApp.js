const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose=require('mongoose');

const mongoURL='mongodb+srv://admin:adminpass@alphacluster.8ddek3r.mongodb.net/?retryWrites=true&w=majority';

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    console.log("Connected to MongoDB");
    }
);

app.set('view engine', 'ejs');

router.get('/',function(req,res){
  res.render(path.join(__dirname+'/frontend/index.html'));
  //__dirname : It will resolve to your project folder.
});

/*router.get('/about',function(req,res){
  res.render(path.join(__dirname+'/frontend/about.html'));
});

router.get('/sitemap',function(req,res){
  res.render(path.join(__dirname+'/frontend/sitemap.html'));
});

router.get('/form',function(req,res){
    res.render(path.join(__dirname+'/frontend/form.html'));
});

router.get('/test',function(req,res){
    res.render(path.join(__dirname+'/frontend/test.html'));
});

router.get('/stopwatch',function(req,res){
    res.render(path.join(__dirname+'/frontend/stopwatch.html'));
}); 

router.post('/form', function (req, res) {
    const input = req.body
    console.log(input.user_name)
    console.log(input.user_password)
    res.render(path.join(__dirname+'/frontend/input.html', 
    {    user_name: input.user_name,
        user_password: input.user_password }));

});*/

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
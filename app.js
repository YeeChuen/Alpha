const express=require('express');
//const mongoose=require('mongoose');

/*const studentAuthRoute = require("./routes/studentAuth");
const coachAuthRoute = require("./routes/coachAuth");*/

/*const mongoURL='mongodb+srv://admin:adminpass@alphacluster.8ddek3r.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
);*/

const app=express();

app.use(express.json);

/*app.use("/backend/studentAuth", studentAuthRoute);
app.use("/backend/coachAuth", coachAuthRoute);*/

app.get("/",(req,res)=>{
    res.send("Main Screen");
});

app.listen(8800, () => {
    console.log("Backend running");
});
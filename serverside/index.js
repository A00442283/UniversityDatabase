const express = require('express');
const mongoose = require('mongoose');
var mongoUrl = "mongodb://m_kuzhippallil:A00442283@localhost:/m_kuzhippallil";

const app = express();
const SERVER_PORT = 8136;

var allowCrossDomain = function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
};

app.listen(SERVER_PORT,function(){
    console.log('Server Started');
});
app.use(express.json());
const Router = require('../serverside/routes/universityRoutes');
app.use('/', Router);




mongoose.connect(mongoUrl,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log("Connected to database");
})


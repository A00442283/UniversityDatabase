const express = require('express');
const mongoose = require('mongoose');
var mongoUrl = "mongodb://m_kuzhippallil:A00442283@localhost:/m_kuzhippallil";
const University = require('../serverside/models/university')

mongoose.set('useFindAndModify', false);

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


app.get('/',async(req,res)=>{

    try{
        const universities = await University.find()
        res.json(universities)
    }
    catch(err){
        res.send('Error - '+err)
    }
    
})

app.post('/getUniversity',async function (req,res){
    
    console.log(req.body.name)
    try{
        const response = await University.find({ 'name' : { '$regex' : req.body.name, '$options' : 'i' } })
        res.json(response)
    }
    catch(err){
        res.send('Error - '+ err)
    }
} )

app.post('/',async function (req,res){
    const university = new University({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone
    })

    try{
        const response = await university.save()
        res.json(response)
    }
    catch(err){
        res.send('Error - '+ err)
    }
})

app.post('/deleteUniversity',async function(req,res){

    University.findOneAndRemove({ 'name' : { '$regex' : req.body.name, '$options' : 'i' } },
        function (err, response) {
            if (err){
                res.send('Error - '+ err)
            }
            else{
            res.json(response)
}
});

})




mongoose.connect(mongoUrl,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log("Connected to database");
})


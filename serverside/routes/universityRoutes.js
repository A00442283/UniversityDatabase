const express = require('express')
const router = express.Router()
const University = require('../models/university')

router.get('/universitites',async(req,res)=>{

    try{
        const universities = await University.find()
        res.json(universities)
    }
    catch(err){
        res.send('Error - '+err)
    }
    
})

router.post('/getUniversity',async function (req,res){
    
    try{
        const response = await university.find({"name":req.body.name})
        res.json(response)
    }
    catch(err){
        res.send('Error - '+ err)
    }
} )

router.post('/',async function (req,res){
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

module.exports = router
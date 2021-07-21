const express = require('express')
const router = express.Router()
const University = require('../models/university')

router.get('/getUniversities',async(req,res)=>{

    try{
        const universities = await University.find()
        res.json(universities)
    }
    catch(err){
        res.send('Error - '+err)
    }
    
})

router.post('/getUniversity/:id',async function (req,res){
    
    try{
        const response = await university.findById(req.params.id)
        res.json(response)
    }
    catch(err){
        res.send('Error - '+ err)
    }
} )

router.post('/addUniversity',async function (req,res){
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
} )

module.exports = router
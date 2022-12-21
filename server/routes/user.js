const express = require('express')
const app = express()

const router = express.Router()

const usercontroller = require('../controller/usercontroller')


router.get('/docinfo',(req,res,next)=>{
    
    usercontroller.doctorinfo(req)

    .then(resp=>{

        console.log(resp)
        res.send(resp)

    })

    .catch(err=>{
        res.status(500).send(err)
    })


})


router.post('/time',(req,res,next)=>{
    
    usercontroller.timing(req)
    .then(resp=>{

        // console.log(resp,"Yeah")
        // res.json({response:resp})
         res.send(resp)
    })

    .catch(err=>{
        res.status(500).send(err)
    })
})

module.exports = router
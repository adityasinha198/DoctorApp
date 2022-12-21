const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')


const app = express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.use(cors())


const userroute = require('./routes/user')

app.use('/user',userroute)



module.exports = app
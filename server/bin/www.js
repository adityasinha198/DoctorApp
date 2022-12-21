const http = require('http')
const app = require('../app')
const mongoose = require('mongoose')

try {

    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://localhost:27017/appointmentapp",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    },()=>{
        console.log("Connected to mongodb")
    })
}

catch(err){
    console.log("Inside error")
}


const port = 8000
app.set('port',port)


const server = http.createServer(app)

server.listen(port)
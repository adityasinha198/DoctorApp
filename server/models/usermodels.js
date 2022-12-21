const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const {ObjectId} = Schema

const userschema = new mongoose.Schema({

    name:{
        type:String
    },
    speciality:{
        type:String
    },
    timeslot:{
        type:Array
    }
})


module.exports = mongoose.model("User",userschema)
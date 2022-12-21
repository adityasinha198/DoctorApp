const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = Schema

const timeschema = new mongoose.Schema({
    
    docid:{
        type:ObjectId,
        default:null
    },
    time1:{
        type:Boolean,
        default:false
    },
    time2:{
        type:Boolean,
        default:false
    },
    time3:{
        type:Boolean,
        default:false
    },
    info:{
        type:ObjectId,
        ref:"User",
        
    }
    
})


module.exports = mongoose.model('Time',timeschema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjecId} = Schema

const testschema = new mongoose.Schema({

    info:{
        type:ObjecId,
        ref:"User"
    }
})


module.exports = mongoose.model("Test",testschema)
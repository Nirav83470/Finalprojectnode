const mongoose = require('mongoose');

const resdata = new mongoose.Schema({
    name :{type : String},
    email : { type : String },
    password : { type : String}
})

const resgi = mongoose.model('finalproject1' , resdata);

module.exports = resgi;
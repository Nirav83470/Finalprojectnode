const mongoose = require('mongoose');

const addproductdata = new mongoose.Schema({
    id : { type : Number},
    title :{type : String},
    price : { type : Number },
    description : { type : String},
    image : { type : String },
    rating : { type : String }
})

const addproduct = mongoose.model('AddProduct' , addproductdata);

module.exports = addproduct;
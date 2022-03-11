const mongoose = require('mongoose');


var schema = mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String},
})

const itemdb = mongoose.model('itemdb',schema);
module.exports = itemdb;
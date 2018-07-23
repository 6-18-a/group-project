var mongoose = require ('mongoose');
var Item = mongoose.model('Item',{
  itemName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    minlength: 1,
    trim: true
  },
  adminprice: {
    type: Number,
    required: true,
    minlength: 1,
    trim: true
  },
  description:{
    type: String,
    maxlength: 60,
    trim: true
  },
  amount:{
    type: Number,
    required: true,
    minlength: 1,
    trim: true
  }
  })

module.exports = {Item}

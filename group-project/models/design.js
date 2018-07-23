var mongoose = require ('mongoose');
var Item = mongoose.model('Design',{
  designName: {
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
  })

module.exports = {Design}

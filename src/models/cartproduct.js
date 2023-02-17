const mongoose = require('mongoose');

const ProductcartSchema = new  mongoose.Schema({
   name: { 
      type: String,
      required: true
   },
   precio: {
      type: Number,
      required: true
   },
   img: {
      type: String,
      require: true
   },
   clouinary_id: {
      type: String
   }, 
   cantidad: {
      type: Number
   }
})

const juguetecart = mongoose.model('jugueteincart', ProductcartSchema)

module.exports = juguetecart
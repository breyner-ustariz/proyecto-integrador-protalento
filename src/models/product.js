const mongoose = require('mongoose');

const ProductSchema = new  mongoose.Schema({
   id: {
      type: Number,
      required: true
   },
   name: { 
      type: String,
      required: true
   },
   marca: {
      type: String,
      required: true
   },
   precio: {
      type: Number,
      required: true
   },
   stock: {
      type: Number,
      required: true
   },
   img: {
      type: String,
      require: true
   },
   categoria:{
      type: String,
      required: true
   },
   edad_desde: {
      type: Number,
      required: true
   },
   edad_hasta: {
      type: Number,
      required: true
   },
   description_corta: {
      type: String,
      require: true
   },
   description_larga: {
      type: String,
      require: true
   }
})

const juguetes = mongoose.model('juguetes', ProductSchema)

module.exports = juguetes
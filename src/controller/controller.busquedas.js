const juguetes = require('../models/product');
const busquedascontroller = {};

busquedascontroller.dosaños = async (req, res) => {
   try {
      const productos = await juguetes.find({edad_hasta: 2}).lean()
      res.render('home', {productos: productos})
   } catch (error) {
      console.log('falla en ruta de busqueda de dos años: ', error);
   }

}
busquedascontroller.cuatroaños = async (req, res) => {
   try {
      const productos = await juguetes.find({edad_hasta: 4}).lean()
      res.render('home', {productos: productos})
   } catch (error) {
      console.log('falla en ruta de busqueda de dos años: ', error);
   }

}
busquedascontroller.seisaños = async (req, res) => {
   try {
      const productos = await juguetes.find({edad_hasta: 6}).lean()
      res.render('home', {productos: productos})
   } catch (error) {
      console.log('falla en ruta de busqueda de dos años: ', error);
   }

}

module.exports = busquedascontroller
const juguetes = require('../models/product')
const homecontroller = {}

homecontroller.home = async (req, res) => {
   try {
      const productos = await juguetes.find().lean();
      res.render("home", { productos: productos, layout: false });
   } catch (error) {
      console.log("algo fallo: ", error);
   }
};


module.exports = homecontroller
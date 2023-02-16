
const juguetes = require("../models/product");
//const juguetecart = require("../models/cartproduct");

const controller = {};

controller.index = async (req, res) => {
   try {
      const productos = await juguetes.find().lean();
      res.render("home", { productos: productos });
   } catch (error) {
      console.log("algo fallo: ", error);
   }
};

// controller.idproduct = async (req, res) => {
//    const { idproduct } = req.body;
//    try {
//       const productcart = await juguetes.findById(idproduct).lean();
//       console.log("este es el producto: ", productcart);
//       const cartproduct = new juguetecart({
//          name: productcart.name,
//          precio: productcart.precio,
//          img: productcart.img,
//       });
//       await cartproduct.save();
//       res.redirect("/");
//    } catch (error) {
//       console.log("algo fallo : ", error);
//    }
// };



module.exports = controller;

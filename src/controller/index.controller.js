
const juguetes = require("../models/product");
const juguetecart = require("../models/cartproduct");

const controller = {};

controller.index = async (req, res) => {
   try {
      const cartsproduct = await juguetecart.find().lean()
      const productos = await juguetes.find().lean();
      res.render("home", { productos: productos, cartsproduct: cartsproduct });
   } catch (error) {
      console.log("algo fallo: ", error);
   }
};

 controller.idproduct = async (req, res) => {
    const { idproduct } = req.body;
    try {
       const productcart = await juguetes.findById(idproduct).lean();
       const cartproduct = new juguetecart({
          name: productcart.name,
          precio: productcart.precio,
          img: productcart.image,
          clouinary_id: productcart.cloudinary_id
       });
       await cartproduct.save();
       res.redirect("/");
    } catch (error) {
       console.log("algo fallo : ", error);
    }
 };



module.exports = controller;

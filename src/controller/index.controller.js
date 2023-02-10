
const juguetes = require('../models/product');

const controller = {};

controller.index = async (req, res)=>{
   try {
      const productos = await juguetes.find().lean();
      console.log('este no esta bien : ',productos);
      res.render('home', {productos: productos})
   } catch (error) {
      console.log('algo fallo: ', error);
   }
};
controller.home = async (req, res)=>{
   try {
      const productos = await juguetes.find().lean();
      console.log('este no esta bien : ',productos);
      res.render('home', {productos: productos, layout: false})
   } catch (error) {
      console.log('algo fallo: ', error);
   }
};

controller.alta = async (req, res)=> {
   const {id, nombre, marca, precio, stock, image, categoria, edadmin, edadmax, descripccioncorta, descripccionlarga } = req.body;
    try {
       const juguete = new juguetes(
         {
            id: id, 
            name: nombre,
            marca: marca,
            precio: precio,
            stock: stock,
            img: image,
            categoria: categoria,
            edad_desde: edadmin,
            edad_hasta: edadmax,
            description_corta: descripccioncorta,
            description_larga: descripccionlarga
         });
       await juguete.save()
    } catch (error) {
       console.log('algo fallo ', error);
    }
}

controller.contact = (req, res)=> {
   res.render('contact',{layout: false})
}
controller.about = (req, res)=> {
   res.render('about',{layout: false})
}




module.exports = controller;
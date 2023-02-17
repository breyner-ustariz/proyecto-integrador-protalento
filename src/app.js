const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const app = express();
const exphbs = require("express-handlebars");
const cors = require("cors");

const methodOverride = require("method-override");
const path = require("path");
require("dotenv").config();
//middleware
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Mongodb Connection

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conexion Exitosa con la Base de datos");
  })
  .catch((error) => {
    console.error(error);
  });

app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "index",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// static files
app.use(express.static(path.join(__dirname, "../public")));

//routes
const routes = require("./routes/index.routes");
app.use(routes);

const cloud = require("./utils/cloudinary");
const upload = require("./utils/multer");
const juguetes = require("./models/product");
const productcart = require('./models/cartproduct')

app.post("/alta", upload.single("image"), async (req, res) => {
  const {
    nombre,
    marca,
    precio,
    stock,
    image,
    categoria,
    edadmin,
    edadmax,
    descripccioncorta,
    descripccionlarga,
  } = req.body;
  try {
    const cloudimg = await cloud.uploader.upload(req.file.path);

    const juguete = new juguetes({
      name: nombre,
      marca: marca,
      precio: precio,
      stock: stock,
      image: cloudimg.secure_url,
      cloudinary_id: cloudimg.public_id,
      categoria: categoria,
      edad_desde: edadmin,
      edad_hasta: edadmax,
      description_corta: descripccioncorta,
      description_larga: descripccionlarga,
    });
    await juguete.save();
    res.redirect("/");
  } catch (error) {
    console.log("algo fallo ", error);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    let product = await productcart.findById(req.params.id);
    product.remove();
    res.redirect("/");
  } catch (error) {
    console.log("algo esta fallando en la ruta delete : ", error);
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("servidor iniciado en puerto: ", port);
});

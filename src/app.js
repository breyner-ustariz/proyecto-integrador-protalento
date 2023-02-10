const express = require('express');
const mongoose = require('mongoose');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path')
require('dotenv').config();
//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//Mongodb Connection
MONGODV_URI=`mongodb+srv://usuario:1234@productos.fdv7muh.mongodb.net/jugueteriaDb?retryWrites=true&w=majority`
mongoose.connect(MONGODV_URI)
   .then(()=>{
      console.log('Conexion Exitosa con la Base de datos');
   })
   .catch((error)=>{
      console.error(error);
   })

  
   

app.engine('handlebars', exphbs.engine({
   defaultLayout: 'index',
   layoutsDir: __dirname + '/views/layouts/',
   partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'));


// static files
app.use(express.static(path.join(__dirname, '../public')))

//routes
const routes = require('./routes/index.routes')
app.use(routes);




const port = process.env.PORT || 3000
app.listen(port, ()=>{
   console.log('servidor a la espera de conexiones');
})
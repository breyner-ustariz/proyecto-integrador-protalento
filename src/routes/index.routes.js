const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');
const homecontroller = require('../controller/controller.home')
const aboutcontroller = require('../controller/controller.about')
const contact = require('../controller/controller.contact')
const alta = require('../controller/controller.alta');
const busquedas = require('../controller/controller.busquedas')

router.get('/', controller.index);
router.get('/home', homecontroller.home);
router.post('/home', controller.idproduct);
router.get('/alta', alta.alta);
router.get('/contact', contact.contact)
router.get('/about', aboutcontroller.about)
router.get('/dos', busquedas.dosaños)
router.get('/cuatro', busquedas.cuatroaños)
router.get('/seis', busquedas.seisaños)
router.get('/ocho', busquedas.seisaños)
router.get('/once', busquedas.seisaños)


module.exports = router;
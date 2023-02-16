const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');
const homecontroller = require('../controller/controller.home')
const aboutcontroller = require('../controller/controller.about')
const contact = require('../controller/controller.contact')
const alta = require('../controller/controller.alta');

router.get('/', controller.index);
router.get('/home', homecontroller.home);
router.get('/alta', alta.alta);
router.get('/contact', contact.contact)
router.get('/about', aboutcontroller.about)


module.exports = router;
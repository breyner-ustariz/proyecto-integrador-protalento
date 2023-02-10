const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.get('/', controller.index);
router.get('/home', controller.home);
router.get('/alta', (req, res)=>{
   res.render('alta', {layout: false})
})
router.post('/alta', controller.alta)
router.get('/contact', controller.contact)
router.get('/about', controller.about)


module.exports = router;
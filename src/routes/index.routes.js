const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.get('/', controller.index);
router.post('/', controller.idproduct);
router.get('/home', controller.home);
router.post('/home', controller.idproduct);
router.get('/alta', (req, res)=>{
   res.render('alta', {layout: false})
})
router.get('/contact', controller.contact)
router.get('/about', controller.about)


module.exports = router;
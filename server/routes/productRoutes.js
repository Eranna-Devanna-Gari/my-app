

const express = require('express')
const router=express.Router();

const productController = require('../controller/productController.js');


router.post('/addProduct', productController.addProduct);
router.get('/getAllProducts', productController.getAllProducts);
router.get('/:id', productController.getOneProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);
router.get('/getActiveProducts', productController.getAllActiveProducts);
router.put('/setInactiveProduct/:id', productController.setInactiveProduct);

module.exports = router

const express = require('express');
const router = express.Router();
const productController = require('./product.controller');
const validation = require('./product.validation');
const authentication = require('../../middleware/authentication');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', authentication, validation.validateProduct, productController.createProduct);
router.put('/:id', authentication, validation.validateProduct, productController.updateProduct);
router.delete('/:id', authentication, productController.deleteProduct);

module.exports = router;

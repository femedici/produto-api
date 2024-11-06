const express = require('express');
const ProductController = require('../controllers/productController');

const router = express.Router();

router.get('/produtos', ProductController.getAllProducts);
router.get('/produto/:id', ProductController.getProductById);
router.post('/produto', ProductController.createProduct);
router.put('/produto/:id', ProductController.updateProduct);
router.delete('/produto/:id', ProductController.deleteProduct);

module.exports = router;

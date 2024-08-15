const express = require('express');
const {getFeaturedProducts} =require('../controller/productController.jsx')
const {getAllProducts} = require("../controller/productController.jsx");
const {addProduct} = require("../controller/productController.jsx");
const {getProductById} = require("../controller/productController.jsx");
const {addReview} = require("../controller/productController.jsx");
const {createPayment} = require("../controller/productController.jsx");
const {getProductByCategory} = require("../controller/productController.jsx");
const {deleteProduct} = require("../controller/productController.jsx");

const router = express.Router();
router.get('/', getAllProducts);
router.get('/featured', getFeaturedProducts);
router.get('/category/:category', getProductByCategory);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.post('/:id/review', addReview);
router.post('/create-payment-intent', createPayment);
router.delete('/:id', deleteProduct);
module.exports = router
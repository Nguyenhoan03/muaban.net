const express = require('express');
const productcontroller = require('../controllers/productcontroller');
const Router = express.Router();

Router.get('/product-san-pham-boi-bat', productcontroller.homecontrollerproduct);

module.exports = Router;

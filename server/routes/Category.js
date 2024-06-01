const express = require('express');
const catecontroller = require('../controllers/categorycontroller')
const Router = express.Router();

Router.get('/getall', catecontroller.getallcategory);


module.exports = Router;

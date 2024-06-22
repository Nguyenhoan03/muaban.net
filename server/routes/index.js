
const Category = require('./Category.js') 
const Product = require('./Product.js')
const initRoutes = (app) => {
    app.use('/category', Category);
    app.use('/product', Product);

   
};

module.exports = initRoutes;

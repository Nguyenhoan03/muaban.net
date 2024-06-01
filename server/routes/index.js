
const Category = require('./Category'); 
const Product = require('./Product')
const initRoutes = (app) => {
    app.use('/category', Category);
    app.use('/product', Product);

    app.use('/', (req, res) => {
        res.send('server on...');
    });
};

module.exports = initRoutes;

//Generated the routers for Products
const { Router } = require('express');
const router = Router();

//Import controler form user.Controller.js
const { getProduct, createProduct, deleteProduct, updateProduct } = require('../../controllers/product.controller')


// Route plus controler and The CRUD
router.route('/api/products')

//this a get route// I change to post for heroku deployu
    .get(getProduct)


    .post(createProduct)



//For deleted, updated and get data from the EMarket DB
router.route('/api/products/:id')
    // .get(getProduct)
    .delete(deleteProduct)
    .put(updateProduct)


module.exports = router;
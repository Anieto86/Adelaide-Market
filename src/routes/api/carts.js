const {Router} = require('express');
const router = Router();

//Import controler form cart.Controller.js

const {getCart , createCart , deleteCart ,updateCart} = require('../../controllers/cart.controller')

// Route plus controler and The CRUD
router.route('/api/carts')
    .get(getCart)
    .post(createCart)

//For deleted, updated and get data from the EMarket DB

router.route ('/api/carts/:id')
        .get(getCart)
        .delete(deleteCart)
        .put(updateCart)


module.exports = router;
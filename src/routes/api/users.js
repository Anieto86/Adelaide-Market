//Genrated the routers for Users
const {Router} = require('express');
const router = Router();

//Import controler form user.Controller.js
const {getUser , createUser , deleteUser} = require('../../controllers/user.controller');


// Route plus controler and The CRUD
router.route('/api/users')
    .get(getUser)
    .post(createUser)

//For deleted, updated and get data from the EMarket DB
router.route('/api/users/:id')
     .delete(deleteUser)
    


module.exports = router;
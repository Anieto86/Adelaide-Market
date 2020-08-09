//Generated the routers for Users
const {Router} = require('express');
const router = Router();

//Import controllers from farmer.controller.js
const {getFarmer, createFarmer} = require('../../controllers/farmer.controller');


// Route plus controler and The CRUD
router.route('/api/farmers')
//this a get route// I change to post for heroku deploy
    .get(getFarmer)


    .post(createFarmer)
   


    //For deleted, updated and get data from the EMarket DB

module.exports = router;
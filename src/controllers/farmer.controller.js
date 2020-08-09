//Import the model
const Farmer = require('../models/Farmer')

//Object | point notation
const farmerCtrls = {};

farmerCtrls.getFarmer = async (req, res) => {
    try {
        const farmers = await Farmer.find();
        res.json({ farmers })
    } catch (error) {
        console.log(error)
    }
}

//For creat a Farmer a populated de DB Emarkert
farmerCtrls.createFarmer = async (req, res) => {
    const { imagePath, name, phone, email, category } = req.body;
    const newFarmer = new Farmer({
        imagePath: imagePath,
        name: name,
        phone: phone,
        email: email,
        category: category,
    });
    await newFarmer.save();
    res.json({ newFarmer });
}

module.exports = farmerCtrls;
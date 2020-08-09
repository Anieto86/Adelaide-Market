
//import Cart Model 
const Cart = require('../models/Cart')

//Object | point notation
const cartCtrl = {};

cartCtrl.getCart = async (req, res) => {
    const carts = await Cart.find();
    res.json({ carts })
}

cartCtrl.createCart = async (req, res) => {
    const { active, modifiedOn, products } = req.body; //desectructure the req.body object 
    const newCart = new Cart({
        active: active,
        modifiedOn: modifiedOn,
        product: {
            products: products,
            name: name,
            price: price,
        }
    });
    await newCart.save();
    res.json({ newCart });
}

// delete, update and get by ID
cartCtrl.deleteCart = async (req, res) => {
    await Cart.findByIdAndDelete(req.params.id);
    res.json("deleted carts")

}

cartCtrl.getCart = async (req, res) => {
    const Cart = await Cart.findById();
    res.json("Cart by id")
}

cartCtrl.updateCart = async (req, res) => {
    await Cart.findByIdAndUpdate(req.params.id, req.body);
    res.json("update carts")
}


module.exports = cartCtrl;
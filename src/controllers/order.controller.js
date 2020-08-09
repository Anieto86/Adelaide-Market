//import order models

const Order = require('../models/Order')

//Object | point notation
const orderCtrls = {}


orderCtrls.getOrder = async (req, res) => {
    const orders = await Order.find();
    res.json({ orders })
}


//For creat a Order and populated de DB Emarkert
orderCtrls.createOrder = async (req, res) => {
    const {name , price} = req.body;
    const newOrder = new Order({
        name : name,
        price: price,
    })
await newOrder.save();
    res.json({newOrder})
}


// Orders Daleted and update using Id 
orderCtrls.deletedOrder = async (req, res) => {
await Order.findByIdAndDelete (req.params.id);
    res.json('order deleted')
}

orderCtrls.updatedOrder = async (req, res) => {
await Order.findByIdAndUpdate (req.params.id , req.body);
    res.json ('order updated')
}



module.exports = orderCtrls;
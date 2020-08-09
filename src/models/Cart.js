const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cartSchema = new Schema({

      active: Boolean,
      modifiedOn: Date,
      product: [
        {
          qunantity: Number,
          name: String,
          price: Number,
        }
      ]
    }) //store the date of cration and the actualizate the schema 

  
  const Cart = mongoose.model('Cart', cartSchema); 


    module.exports = Cart;
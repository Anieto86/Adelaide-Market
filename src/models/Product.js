const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    imagePath: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    category: {
        type: String,
    }
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
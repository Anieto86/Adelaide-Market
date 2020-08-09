const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Model Farmer 
const farmerSchema = new Schema({
    imagePath: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
    },
    email: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
    }
})

const Farmer = mongoose.model ('Farmer' , farmerSchema);

module.exports = Farmer;
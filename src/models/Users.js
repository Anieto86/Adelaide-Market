const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Model Schema
const userSchema = new Schema({
    username: {
        type: String,
        requires: "Username is Required",
        trim: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        // validate: [({ length }) => length >= 6, "Password should be longer."]
      },
    email: {
        type: String,
        trim: true,
        unique: true,
        // required: 'Email address is required',
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
},
    {
        timestamp: true, 
    }) //store the date of cration and the actualizate the schema 


     // Encrypt passwords



    const User = mongoose.model('User',userSchema); 


    module.exports = User;
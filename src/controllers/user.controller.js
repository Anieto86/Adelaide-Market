// import user model 
const User = require('../models/Users');

//Object | point notation
const userCtrls = {};


userCtrls.getUser = async (req, res) => {
    const users = await User.find();
    res.json({ users })
}

userCtrls.createUser = async (req, res) => {
    const {username, password, email } = req.body;
    const newUser = new User({
        username: username,
        password: password,
        email: email,
    });
    await newUser.save();
    res.json(newUser);
}


userCtrls.deleteUser = async (req, res) =>{
    await User.findByIdAndDelete (req.params.id);
    res.json("User deleted")
}





module.exports = userCtrls;
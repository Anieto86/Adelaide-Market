require('dotenv').config();

var User = require('../models/Users');

const mongoose = require("mongoose");

const URI =  process.env.MONGODB_URI ? 'process.env.MONGODB_URI' : 'mongodb://localhost/Emarket'
mongoose.connect(URI, {
  useCreateIndex : true,
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(()=>{
  console.log("conected to mongodb");
}).catch(error => {
  console.log("mongo error",error);
})

const users = [
    new User({
        username: "jhon",
        password: 123456,
        email: "jhon@gmail.com",
    }),
    new User({
        username: "paul",
        password: 123456789,
        email: "paul@gmail.com",

    }),
    new User({
        username: "ringo",
        password: 123456789,
        email: "ringo@gmail.com",
    }),
    new User({
        username: "george",
        password: 123456789,
        email: "george@gmail.com",
    }),
    new User({
        username: "homero",
        password: 123456789,
        email: "homero@gmail.com"
    }),
];

let done = 0;
for (var i = 0; i < users.length; i++) {
    users[i].save(function (err, result) {
        done++;
        if (done === users.length) {
            exit();
        }
    });
}
    function exit() {
    mongoose.disconnect();
}
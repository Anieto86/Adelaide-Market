require('dotenv').config();

var Farmer = require('../models/Farmer')

const mongoose = require("mongoose");

const URI = process.env.MONGOLAB_NAVY_URI ? process.env.MONGOLAB_NAVY_URI : 'mongodb://localhost/Emarket';
//const URI =  process.env.MONGODB_URI ?  process.env.MONGODB_URI : 'mongodb://localhost/Emarket';
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


var farmers = [
    new Farmer({
        imagePath: "https://cdn.newsapi.com.au/image/v1/4ef6af0eeb20694bb6f22f29a41c0626?width=1024" , 
        name: "Bart",
        phone: 123456789,
        email: "bob@gmail.com",
        category:"Fruit-Vegetables"
    }),
    new Farmer({
      imagePath: "https://www.veggies.org.uk/wp-content/uploads/Farmer-Jay-metro.jpg" , 
      name: "Milhouse",
      phone: 123456789,
      email: "bob@gmail.com",
      category:"Meat"
    }),
    new Farmer({
      imagePath: "https://gastronicks.co.uk/wp-content/uploads/2018/04/Big-Cheese.jpg" , 
      name: "Nelson",
      phone: 123456789,
      email: "bob@gmail.com",
      category:"Cheese"
    }),
    new Farmer({
      imagePath: "https://i2.wp.com/www.culinarycareer.net/wp-content/uploads/2015/10/baker.jpg?fit=1000%2C667" , 
      name: "Marge",
      phone: 123456789,
      email: "bob@gmail.com",
      category:"Bakery"
    })
];

let done = 0;
for (var i = 0; i < farmers.length; i++) {
  farmers[i].save(function (err, result) {
    done++;
    if (done === farmers.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}

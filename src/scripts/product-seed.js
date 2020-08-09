require('dotenv').config();

let Product = require('../models/Product')

var mongoose = require("mongoose");


const URI = process.env.MONGOLAB_NAVY_URI ? process.env.MONGOLAB_NAVY_URI : 'mongodb://localhost/Emarket';
//const URI =  process.env.MONGODB_URI ?  process.env.MONGODB_URI : 'mongodb://localhost/Emarket'
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



var products = [
  new Product({
    imagePath: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Tomato",
    price: 2,
    category:"Fruit-Vegetables"
  }),
  new Product({
    imagePath: "https://images.all-free-download.com/images/graphicthumb/orange_fruit_vitamins_217280.jpg",
    title: "Orange",
    price: 3,
    category:"Fruit-Vegetables"
  }),
  new Product({
    imagePath: "https://i1.wp.com/homescool.ph/wp-content/uploads/2015/09/lemons1.jpg",
    title: "Lemon",
    price: 1,
    category:"Fruit-Vegetables"
  }),
  new Product({
    imagePath: "https://www.analdex.org/wp-content/uploads/2017/05/avocado-2351191_960_720.jpg",
    title: "Avocado",
    price: 8,
    category:"Fruit-Vegetables"
  }),
  new Product({
    imagePath: "https://cdn.wallpapersafari.com/41/78/1N9uxE.jpg",
    title: "Carrot",
    price: 5,
    category:"Fruit-Vegetables"
  }),
  new Product({
    imagePath: "https://hdwallsource.com/img/2018/8/thumb/broccoli-food-desktop-wallpaper-62710-64693-hd-wallpapers-thumb.jpg",
    title: "Broccoli",
    price: 3,
    category:"Fruit-Vegetables"
  }),
  new Product({
    imagePath: "https://ak.picdn.net/shutterstock/videos/4886897/thumb/8.jpg",
    title: "Apple",
    price: 3,
    category:"Fruit-Vegetables"
  }),
  new Product({
    imagePath: "https://cdn.theatlantic.com/thumbor/TxEw_yjPER1uluJjP8qc0nNRHpw=/0x72:1000x635/720x405/media/img/mt/2015/05/shutterstock_247399801/original.jpg",
    title: "Red Onions",
    price: 2,
    category:"Fruit-Vegetables"
  }),
  new Product({
    imagePath: "https://wallpapercave.com/wp/wp2145499.jpg",
    title: "Banana",
    price: 4,
    category:"Fruit-Vegetables"
  }),
  new Product({
    imagePath: "https://www.elitereaders.com/wp-content/uploads/2016/09/5-4.jpg",
    title: "Capsicum",
    price: 7,
    category:"Fruit-Vegetables"
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bleu_de_Gex.jpg",
    title: "Blue Cheese",
    price: 8,
    category:"Cheese"
  }),
  new Product({
    imagePath: "https://sheqerpikant.al/wp-content/uploads/2018/09/brie.png",
    title: "Brie Cheese",
    price: 16,
    category:"Cheese"
  }),
  new Product({
    imagePath: "https://s3.us-east-2.amazonaws.com/cheesemaking-supply-co/73fb97c2bb1b288216f9158ac91be56d.jpg",
    title: "Camembert Cheese",
    price: 12,
    category:"Cheese"
  }),
  new Product({
    imagePath: "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/470340853.jpg?itok=Vu-VD1UP",
    title: "Cheddar Cheese",
    price: 10,
    category:"Cheese"
  }),
  new Product({
    imagePath: "https://www.chabaso.com/wp-content/uploads/2018/11/Group-8-1400x759.jpg",
    title: "Bread",
    price: 4,
    category:"Bakery"
  }),
  new Product({
    imagePath: "https://www.thespruceeats.com/thmb/igClDD5uc9ZkHhca8WB4VBWTLW4=/2048x1152/smart/filters:no_upscale()/classic-and-easy-chocolate-cake-recipe-995137_14_preview-5afc9a2743a1030037167eff.jpeg",
    title: "Cake",
    price: 30,
    category:"Bakery"
  }),
  new Product({
    imagePath: "https://www.bakemag.com/-/media/E08A879CA1E447A884BC09DC0651B400.ashx",
    title: "Cannoli",
    price: 5,
    category:"Bakery"
  }),
  new Product({
    imagePath: "https://www.capitanofertas.com/images/articulos/0000/503-c.jpg",
    title: "Cupcake",
    price: 2.5,
    category:"Bakery"
  }),
  new Product({
    imagePath: "https://dieschobers.at/wp-content/uploads/2018/05/T-Bone-Steak.jpg",
    title: "T-Bone",
    price: 10,
    category:"Meat"
  }),
  new Product({
    imagePath: "https://www.gwaunvalleymeats.co.uk/wp-content/uploads/2017/05/Rump-Steak-Beef-63.jpg",
    title: "Rump",
    price: 15,
    category:"Meat"
  }),
  new Product({
    imagePath: "https://www.gwaunvalleymeats.co.uk/wp-content/uploads/2017/05/Rump-Steak-Beef-63.jpg",
    title: "Rump",
    price: 15,
    category:"Meat"
  }),
  new Product({
    imagePath: "https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2019/08/gettyimages-135568957.jpg",
    title: "Wagyu Beef ",
    price: 40,
    category:"Meat"
  }),  new Product({
    imagePath: "https://www.ourlocalbutcher.com/images/_lib//short-beef-ribs-900g1kg-1187-0-1477512134000.jpg",
    title: "Ribs Beef ",
    price: 30,
    category:"Meat"
  }),

];

let done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}


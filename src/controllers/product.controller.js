// import user model 
const Product = require('../models/Product')

//Object | point notation
const productCtrl = {};

productCtrl.getProduct = async (req, res) => {
    try{
  const products =  await Product.find();
    res.json( {products} ) 
    }catch (error) {
        console.log(error);
}
}


// Creat product for populated the DB
productCtrl.createProduct = async (req, res) => {
    const { imagePath, title, price,category } = req.body;
    const newProduct = new Product({
        farmerId: farmerId,
        imagePath: imagePath,
        title: title,
        price: price,
        category:category,
    });
    await newProduct.save();
    res.json({ newProduct });
}


// Products Using id
productCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json('Product Deleted');
}

productCtrl.updateProduct = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    console.log(req.params.id, req.body)
    res.json('Product Updated');
}

//Exporting the methods created to the routes
module.exports = productCtrl;
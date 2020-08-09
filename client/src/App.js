import React, { Component } from 'react'
import './App.css';
import axios from 'axios';

//Router 
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Component
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
// import Login from './components/login/login'
import Portal from './components/portal/portal';
import Farmer from './components/farmer/farmer';
import Catalogue from './components/catalogue/catalogue';
import Basket from './components/basket/basket';
import Footer from './components/footer/footer';

//Import Redux
import {Provider , connect} from "react-redux"



//Import Img in Portal
import recipies from "./components/img/Recipes.png"
import events from "./components/img/events.jpg"
import parking from "./components/img/parking.jpg"
import healthyList from "./components/img/healthy_list.jpg"


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      cartItems: [],
    };

    //!Bind 
    this.handleAddToCard = this.handleAddToCard.bind(this)
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
  }

  //!Request to my EMarket DB| collection products | Fecching Products data
  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/products/');
    this.setState({
      products: res.data.products,
      filteredProducts: res.data.products
    });
    console.log(res.data.products);
    if (localStorage.getItem('cartItems')){
      this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))})
    }
  }

  //!Fuction That pass as Prop for add product into the basket
  handleAddToCard (e, products) {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        console.log('dentro de forEach')
        if (item._id === products._id) {
         productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        console.log('dentro de cartItem push')
        cartItems.push({...products, count: 0});
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log(this.state.cartItems, "cart item")
      return cartItems;
    })
  }

  //!Fucntion to remove items from the Basket | pass as Prop 
  handleRemoveFromCart(e,item) {
    this.setState (state => {
     const cartItems = state.cartItems.filter (elm => elm._id!==item._id)
     localStorage.setItem('cartItem', cartItems)
     return {cartItems};
    });
  }
  render() {
   
    return (
      <Provider store = {store}>
      <div>
        <Router>
          <div className="App">
            <Navigation />
            <Route exact path="/home">
              <br />
              <Home />
              <Portal
                photo={recipies}
                title="Grocery"
                text="Find our healthy grocery &nbsp; list"
                links={healthyList}
              />
              <Portal
                photo={events}
                title="Events & News"
                text="Find events | FREE ENTRY 8.30AM - 12.30PM "
                links={"https://localfoodconnect.org.au/calendar/farmers-market-calendar/"}
              />
              <Portal
                photo={parking}
                title=" Map & Parking"
                text=" Open 24/7, never closes!"
                links={"https://www.google.com/maps/place/Adelaide+Farmers'+Market/@-34.9483259,138.5848807,19.79z/data=!4m5!3m4!1s0x6ab0cf08281cc13b:0xd26ff014e00d93f5!8m2!3d-34.948199!4d138.5850248"}
              />
            </Route>

            <Route path="/Farmers">
              <Farmer />
            </Route>

            <Route path="/catalogue">
              <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />

              <Catalogue products={this.state.filteredProducts} handleAddToCard={this.handleAddToCard} />
            </Route>

            <Footer />
          </div>
        </Router>
      </div>
      </Provider>
    )
  }
}







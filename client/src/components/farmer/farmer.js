import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//stylesheets
import "./farmer.css";

export default class Farmer extends Component {

    state = {
        farmers: [],
        renderedFarmers: [],
    }

    //!Request to my EMarket DB| collection farmers 
    async componentDidMount() {
        
        const res = await axios.get('http://localhost:4000/api/farmers/')
        //const res = await axios.get('/api/farmers/')
        console.log(res)
        this.setState({ farmers: res.data.farmers , renderedFarmers: res.data.farmers})
        console.log(this.state.farmers)
        console.log("Farmers")
    }

     //!Filter functions fot the category farmers
  filterVegetables = () => {
    let vegetableProducts = this.state.farmers.filter(farmer => (farmer.category === "Fruit-Vegetables"))
    console.log(vegetableProducts);
    this.setState({renderedFarmers: vegetableProducts });
  }

  filterCheese = () => {
    let CheeseProducts = this.state.farmers.filter(farmer => (farmer.category === "Cheese"))
    console.log(CheeseProducts);
    this.setState({renderedFarmers: CheeseProducts });
  }

  filterBakery = () => {
    let BakeryProducts = this.state.farmers.filter(farmer => (farmer.category === "Bakery"))
    this.setState({renderedFarmers: BakeryProducts})
  }

  filterMeat = () => {
    let MeatProducts = this.state.farmers.filter(farmer => (farmer.category === "Meat"))
    this.setState({renderedFarmers: MeatProducts})
  }

    render() {
        return (
            <div className="container busquedaFarmer">
                <div className="container botones">
                <div className="btn-group  " role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={this.filterVegetables} >Fruit & Vegetables</button>
                    <button type="button" className="btn btn-secondary" onClick={this.filterCheese}>Cheese</button>
                    <button type="button" className="btn btn-secondary" onClick={this.filterBakery}>Bakery</button>
                    <button type="button" className="btn btn-secondary" onClick={this.filterMeat}>Meat</button>
                </div>
                <Link className="nav-link" to="/contact">
                <button className="btn btn-secondary contact-btn" type="button">Stallholders Contact</button>
                </Link>
                </div>
                
                <div className="container Farmers">
                    <div className="row row-cols-5 rowFamer">
                        <div className="col">Producers & Farmers</div>
                        <div className="col">Name</div>
                        <div className="col">Phone</div>
                        <div className="col">Email</div>
                        <div className="col">Category</div>
                    </div>
                    {this.state.renderedFarmers.map(farmers => (
                        <div className="row row-cols-5 rowFamer" key={farmers._id}>
                            <img src={farmers.imagePath} alt='/' className="imgFarmer" />
                            <div className="col">{farmers.name}</div>
                            <div className="col">{farmers.phone}</div>
                            <div className="col">{farmers.email}</div>
                            <div className="col">{farmers.category}</div>
                        </div>
                    ))}
                  
                    <br />
                </div>
            </div>
        )
    }
}



// search : ""

    //   //! Filter fucntion by input
    //   SearchChange = (event) => {
    //     this.setState({ search: event.target.value });
    //   }

    //Passing the seach fuction using onChange

      // const filterFamers = this.state.farmers.filter(
        //     farmers => {
        //     return farmers.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        //   }
        //   );



// {filterFamers.map}

//  {/* <input className="form-control mr-sm-2 inputFamer"
//             value={this.state.search}
//             onChange={this.SearchChange.bind(this.SearchChange.title)}
//             type="text"
//             placeholder="Search..." aria-label="buscar" /> */}
import React, { Component } from 'react'


//stylesheets
import './catalogue.css'

export default class Catalogue extends Component {

  state = {
    search: "",
  };


  //! Filter fucntion by input
  SearchChange = (event) => {
    this.setState({ search: event.target.value });
  }

  //!Passing the seach fuction using onChange
  render() {
    const seacrhProducts = this.props.products.filter(
      products => {
        return products.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    );


    return (
      <div className="container">
        <div className="container busqueda">
          <input className="form-control mr-sm-2 input"
            value={this.state.search}
            onChange={this.SearchChange.bind(this.SearchChange.title)}
            type="text"
            placeholder="Search..." aria-label="buscar" />
        </div>
        <br />

        <div className="container">
          {seacrhProducts.map(products => (
            <div className=" cardC" style={{ width: "13rem" }} key={products._id}>
              <img src={products.imagePath} className="card-img-top" alt="imgeProduct" />
              <div className="card-body">
              </div>
              <h5 className="card-title">{products.title}</h5>
              <div>
                <b className="card-text"> Price:{products.price} AU</b>
                <br />
                <br />
                <button className="btn btn-success"
                  onClick={(e) => this.props.handleAddToCard(e, products)}>Add to Cart
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}


















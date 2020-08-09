import React, { Component } from 'react'

// stylesheets
import './portal.css';
export default class Portal extends Component {
 
  render() {
    return (
      <div className="container portal">
        <div className=" cardP" style={{ width: "15rem" }} >
          <img src={this.props.photo} className="card-img-top" alt="/" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.text}</p>
            <button className="btn btnCadP" >  
              <a className="btn btnCadPa" href={this.props.links}>Find more</a>
            </button>
          </div>
        </div>
      </div>
    )
  }
}


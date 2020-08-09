import React from 'react'

//Styles
import './home.css'

export default function home() {
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text">Welcome to Adelaide Market</h1>
          <p className="lead text"> Fresh food and more...</p>
          <p className="lead text" style={{fontSize: "20px"}}> Support local and shop your essentials</p>
        </div>
      </div>

    )
}




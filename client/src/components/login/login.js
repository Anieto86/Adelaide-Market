import React, { Component } from 'react';
import * as fireAuth from 'firebase/app'; import 'firebase/auth';

// import {} from '../../initializers/firebase';


//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


//styles 
import './login.css'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);

  }

  login() {
    const provider = new fireAuth.auth.GoogleAuthProvider();
   
    fireAuth.auth().signInWithPopup(provider).then(result => {
      console.log(provider);
    })
  }
  render() {
    return (

      <div>
        <button className="login" onClick={this.login}>Subscribe &nbsp;
        <FontAwesomeIcon icon={faGoogle} style={{ fontSize: "1.5em", color: "red" }} /> 
        </button>
      </div>

    )
  }
}

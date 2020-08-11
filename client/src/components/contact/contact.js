import React, {useState} from 'react'

import './contact.css'

//Import db from firebase database
import {db} from '../../initializers/firebase';


export default function Contact() {
    const [name, setName,] = useState ("");
    const [email, setEmail,] = useState ("");
    const [message, setMessage,] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message
        })
        .then( () => {
            alert ("Massage has been submitted");
        })
        .catch(err =>{
           
            alert(err.message);
            console.log(err);
        })

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
  
            <form className="row" onSubmit={handleSubmit}>
                    
                <div className="col-md-6 col-sm-12 container">
                <br/>
                <br/>
                <h1 className="contact-txt">To be member and recive more information , please contac us</h1>
                   
                    <div className="form-group">
                        
                        <label className="contact">Name</label>
                        <input type="text" className="form-control" 
                        value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        
                        <label className="contact">Email</label>
                        <input type="text" className="form-control" 
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">

                        <label className="contact">Message</label>
                        <textarea className="form-control" rows="5" 
                        value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-dark btn-block submit">Submit</button>
                    </div>
                </div>+

        </form>
    )
}
import React, { Component } from 'react'

//Styles
import "./basket.css"

export default class Basket extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="basket" >
                {cartItems.length === 0 ? ("Basket is empty"
                ) : (
                        <div> You have {cartItems.length} products in the basker</div>
                    )}
                {cartItems.length > 0 && (
                    <div>
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item._id}>
                                  {item.count} <b>{item.title}</b>
                                     = {item.price * item.count}
                                    <button
                                        className="btn btn-danger deleted-btn"
                                        onClick={(e) => this.props.handleRemoveFromCart(this.props.cartId, item)
                                        }>X</button>
                                    <br />
                                </li>
                            ))}
                        </ul>
                        <b>
                            Total:{cartItems.reduce((a, c) => a + c.price * c.count, 0)}
                        </b>
                        <br/>
                        <button className="btn btn-primary checkout-btn"
                            onClick={() => alert('Checkout needs to implement...')}>Checkout
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

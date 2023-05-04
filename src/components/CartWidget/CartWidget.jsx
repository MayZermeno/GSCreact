import cart from './assets/CartW.svg';
import React from 'react';
import "./CartWidget.css"

const CardWidget = () => {

    return (
        <div>
            <img className="carrito" src={cart} alt='cart-widget' />
           <p>0</p>
        </div>
    )
}

export default CardWidget
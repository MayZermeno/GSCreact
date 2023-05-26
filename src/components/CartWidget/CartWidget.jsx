import cart from './assets/CartW.svg';
import React, { useContext } from 'react';
import "./CartWidget.css"
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CardWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);
    return (
        <div>
            <Link to="/cart">
            <img className="carrito" src={cart} alt='cart-widget' />
           <p> {cantidadEnCarrito()}</p>
           </Link>
        </div>
    )
}

export default CardWidget
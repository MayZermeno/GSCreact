import React,{ useContext } from 'react';
import './cart.css'
import { CartContext } from '../context/CartContext';
import ItemCounter from "./Contador/Contador";



const Cart = () => {
  const { carrito, precioTotal, vaciarCarrito, disminuirCantidad, aumentarCantidad } = useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {carrito.map((prod) => (
          <div className="col" key={prod.id}>
            <div className="card">
              <h3 className="card-title">{prod.titulo}</h3>
              <p className='card-text'>Cantidad: {prod.cantidad}</p>
              <p className='card-text'>Precio por pieza: ${prod.precio}</p>
              <p className='card-text precio-total'>Precio Total: ${prod.precio * prod.cantidad}</p>
              <ItemCounter
                cantidad={prod.cantidad}
                increment={() => aumentarCantidad(prod.id)}
                decrement={() => disminuirCantidad(prod.id)}
                stock={prod.stock} 
                mostrarBotonAgregar={false}
              />
            </div>
          </div>
        ))}


        {
         carrito.length > 0 && 
       
       <div className="col">
         <h2> Precio Total : ${precioTotal()}</h2>
         <div className="botones">
         <button className='btn btn-outline-dark btn-compra' onClick={vaciarCarrito}> Vaciar Carrito </button>
         <button className='btn btn-outline-dark'> Completar compra </button>
         </div>
         </div>
     
        }
              
        
       
      </div>
    </div>
  );
};


export default Cart;
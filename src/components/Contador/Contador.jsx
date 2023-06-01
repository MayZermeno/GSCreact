
import React from "react";
import './contador.css';

const ItemCounter = ({cantidad, increment, decrement, mostrarBotonAgregar, botonAgregar}) => {



return (
    <div className="counter">
        <div className="controls">
        <button className="button" onClick={decrement}> - </button>
        <h3 className="number">{cantidad}</h3>
        <button className="button" onClick={increment}> + </button>
        </div>
        {mostrarBotonAgregar && (
        <div>
          <button className="button" onClick={botonAgregar}>
            Agregar al carrito
          </button>
        </div>
      )}
     </div>
   
     )


}



export default ItemCounter;
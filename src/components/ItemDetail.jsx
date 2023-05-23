import "./ItemListContainer/ItemListContainer.css";
import Counter from "./Contador/Contador";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

    const [goToCart, setGoToCart] =useState(false);

const onAdd =(quantity)=>{
    setGoToCart(true);
}

    return (

        <div className="container mt-5">
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
                <div className="producto-detalle">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                    <h3 className="card-title darktext">{item.titulo}</h3>
                    {/* <p className="d-flex darktext justify-content-center"> id: {item.id} </p> */}
                    <p className="d-flex darktext">{item.descripcion}</p>
                    <p className="d-flex darktext">  {item.vigencia}</p>
                   
                    {
                        goToCart
                        ?
                        <Link className="button" to='/cart'>Terminar Compra</Link>
                        : <Counter initial={1} stock={item.stock} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    )


}
export default ItemDetail
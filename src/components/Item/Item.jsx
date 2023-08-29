import React from "react";
import "./Item.css"
// import { Link } from "react-router-dom";
// import Counter from "../Contador/Contador";



const Item = ({ producto }) => {

    return (

        <div className="col-12">
            <div className="card card-product">
                <img className="img-producto object-fit-cover " src={producto.imagen} alt={producto.titulo} />
                <h3 className="card-product-title p-2">{producto.titulo}</h3>
                <p className="card-body product-description">{producto.descripcion}</p>
                <div className="card-footer d-flex darktext">  {producto.vigencia}</div>
            </div>
        </div>

    )
};

export default Item;

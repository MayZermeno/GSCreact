import React from "react";
import { Link } from "react-router-dom";
import Counter from "../Contador/Contador";



const Item = ({ producto }) => {

    return (

        <div className="col-12">
            <div className="card">
                <img className="img-fluid card-img" src={producto.imagen} alt={producto.titulo} />
                <h3 className="card-title darktext">{producto.titulo}</h3>
                <Link className="ver-mas" to={`/item/${producto.id}`}> Ver más </Link>
                <Counter initial={1} stock={8} onAdd={(quantity) => console.log('cantidad agregada', quantity)
                } />
            </div>
        </div>

    )
};

export default Item;

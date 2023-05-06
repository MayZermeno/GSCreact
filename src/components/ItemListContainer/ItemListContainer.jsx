import "./ItemListContainer.css";
import React from "react";
import { useEffect, useState } from "react";
import pedirProductos from "./pedirProductos";
import ItemDetailContainer from "../ItemDetailContainer";


const ItemListContainer = () => {


    const [productos, setProductos] = useState([]);


    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res);
            })
    }, [])



    return (
        <div>
                    <ItemDetailContainer productos={productos} />
            
            </div>
      

    )
}

export default ItemListContainer
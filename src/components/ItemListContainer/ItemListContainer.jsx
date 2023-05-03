import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import pedirProductos from "./pedirProductos";
import ItemList from "../ItemList";


const ItemListContainer = ({ greeting }) => {


    const [productos, setProductos] = useState([]);


    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res);
            })
    }, [])



    return (
        <div>
            <h2>{greeting}</h2>
    
                
                    <ItemList productos={productos} />
            
            </div>
      

    )
}

export default ItemListContainer
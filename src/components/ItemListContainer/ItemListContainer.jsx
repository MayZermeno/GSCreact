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
            <div className="container-fluid">
                <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
                    <ItemList productos={productos} />
                </div>
            </div>
        </div>

    )
}

export default ItemListContainer
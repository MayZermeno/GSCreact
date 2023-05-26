import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {pedirProductos} from"./pedirProductos";
import { useParams } from "react-router-dom";




const ItemListContainer = () => {


    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo]=useState("Productos");
    const categoria =useParams ().categoria;
    const id =useParams().id
  

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((prod) => prod.categoria === categoria)); 
                    setTitulo(categoria)

                } else{ setProductos(res);
                }
               
            })
    }, [categoria]);

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                if (id) {
                    setProductos(res.filter((prod) => prod.id === id)); 

                } else{ setProductos(res);
                }
               
            })
    }, [id]);
    useEffect(() => {
        if (categoria) {
          pedirProductos().then((res) => {
            setProductos(res.filter((prod) => prod.categoria === categoria));
            setTitulo(categoria);
          });
        }
      }, [categoria]);
    



    return (
        <div>
                    <ItemList productos={productos} titulo={titulo}/>
            
            </div>
      

    )
}

export default ItemListContainer
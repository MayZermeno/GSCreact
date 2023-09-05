import "./ItemListContainer.css";
import React,{ useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {pedirProductos} from"./pedirProductos";
import { useParams } from "react-router-dom";
import SearchResult from "../Search/SearchResult";



//este componente es el que haace el fitrado de los productos que vienen del Js y usa el componente con la funcion de pedir productos


const ItemListContainer = ({onSearch}) => {
console.log("aqui se inicializan los productos")

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo]=useState('Productos');
    const { categoria, id } = useParams();
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

 
    const textoBusqueda='a';
  
    useEffect(() => {
        // Realiza la solicitud a pedirProductos una sola vez
        pedirProductos()
          .then((res) => {
            let filteredProducts = [];
    
            // if (categoria) {
            //   filteredProducts = res.filter((prod) => prod.categoria === categoria);
            //   setTitulo(categoria);
            // }
    
            // if (id) {
            //   filteredProducts = res.filter((prod) => prod.id === id);
            // }
            // if (onSearch) {
            //     const resultadosBusqueda = filteredProducts.filter((prod) =>
            //       Object.values(prod).some((value) =>
            //         value.toString().toLowerCase().includes(onSearch.toLowerCase())
            //       )
            //     );
            //     setResultadosBusqueda(resultadosBusqueda);
            //     setTitulo(`Resultados de búsqueda para "${onSearch}"`);
            //   }
            console.log("el valor de res",res)
            res.forEach(x=>{
                if(x.categoria.toLowerCase().includes(textoBusqueda.toLowerCase()) 
                || x.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase())
                || x.titulo.toLowerCase().includes(textoBusqueda.toLowerCase()) )
                filteredProducts.push(x);
            })
            setProductos(filteredProducts);
          })
          .catch((error) => {
            console.error('Error al obtener productos:', error);
          });
      }, [categoria, id, onSearch]);
    
   

    return (
        <div>

                    <ItemList productos={productos} titulo={titulo}/>
                    {/* {onSearch && <SearchResult searchResults={productos}/>} */}
            
            </div>
      

    )
}

export default ItemListContainer
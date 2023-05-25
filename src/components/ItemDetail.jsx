import "./ItemListContainer/ItemListContainer.css";
import ItemCounter from "./Contador/Contador";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({ item }) => {
    const {carrito, setCarrito} = useContext (CartContext);


 const [cantidad, setCantidad] = useState(1);
 
 const increment = () => {
  cantidad < item.stock && setCantidad(cantidad + 1)
     
     
 }
 const decrement = () => {
cantidad > 1 && setCantidad(cantidad -1)
}

const botonAgregar = ()=>{

   const itemAgregado = {...item, cantidad};
   const nuevoCarrito =[...carrito];

   const estaEnCarrito = nuevoCarrito.find((producto)=> producto.id === itemAgregado.id)

  


   if (estaEnCarrito){
    estaEnCarrito.cantidad +=  cantidad;
    setCarrito(nuevoCarrito);
   }
   else{
    nuevoCarrito.push(itemAgregado);
  
   }
   setCarrito(nuevoCarrito);
     
}
console.log(carrito)



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
                        <ItemCounter 
                        cantidad={cantidad} 
                        increment={increment} 
                        decrement={decrement} 
                        botonAgregar={botonAgregar} />
                    }
                </div>
            </div>
        </div>
    )


}
export default ItemDetail
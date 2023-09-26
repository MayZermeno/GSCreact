import "../ItemList/ItemListContainer/ItemListContainer.css";
// import ItemCounter from "./Contador/Contador";
import React from "react"; //de aqui se quito el {useContext, useState}
// import { CartContext } from "../context/CartContext";
//item detail es el componente que renderiza la informacion del producto (item) y permite agregar y quitar producto


const ItemDetail = ({ item }) => {
//     const { agregarAlCarrito} = useContext (CartContext);


//  const [cantidad, setCantidad] = useState(1);
 
//  const increment = () => {
//   cantidad < item.stock && setCantidad(cantidad + 1)
     
     
//  }
//  const decrement = () => {
// cantidad > 1 && setCantidad(cantidad -1)
// }



    return (

        <div className="container mt-5">
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
                <div className="card producto-detalle">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                    <h3 className="card-title darktext">{item.titulo}</h3>
                    {/* <p className="d-flex darktext justify-content-center"> id: {item.id} </p> */}
                    <p className="d-flex darktext">{item.descripcion}</p>
                    <p className="d-flex darktext">  {item.vigencia}</p>
                    {/* <h4 className="d-flex darktext justify-content-center"> $ {item.precio}</h4>
                   
                   
                    {
                        <ItemCounter 
                        cantidad={cantidad} 
                        increment={increment} 
                        decrement={decrement} 
                        mostrarBotonAgregar={true}
                        botonAgregar={()=>{agregarAlCarrito(item,cantidad)}} />
                    } */}
                </div>
            </div>
        </div>
    )


}
export default ItemDetail
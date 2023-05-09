import { useEffect, useState } from "react";
import { pedirItemporId } from "../ItemListContainer/pedirProductos";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{

    const [item, setItem]= useState(null);
    const id = useParams().id

useEffect(()=>{
    pedirItemporId(Number(id))
    .then((res) => {
        setItem(res);
    })
}, [id])

    return(
        <div>
          {item &&  <ItemDetail item={item}/>} 
        </div>
    )
}

export default ItemDetailContainer
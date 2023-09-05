import React,{ useEffect, useState } from "react";
import { pedirItemporId } from "../ItemListContainer/pedirProductos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const itemData = await pedirItemporId(Number(id));
          setItem(itemData);
        } catch (error) {
          // Maneja el error adecuadamente, como mostrar un mensaje de error al usuario
          console.error("Error al obtener el item:", error);
        }
      };
  
      fetchData();
    }, [id]);
  
    return (
      <div>
        {item && <ItemDetail item={item} />}
      </div>
    );
  };
  

export default ItemDetailContainer
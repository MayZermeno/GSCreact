import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { pedirProductos } from "./pedirProductos";
import { useParams } from "react-router-dom";
import { useSearchContext } from '../../Search/SearchContext';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo] = useState('Productos');
  const { categoria, id } = useParams();
  const { textoIngresado } = useSearchContext(); // Accede al contexto de búsqueda

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        let filteredProducts = [];

        if (textoIngresado) {
          const textoABuscar = textoIngresado.toLowerCase();
          res.forEach((x) => {
            if (
              x.categoria.toLowerCase().includes(textoABuscar) ||
              x.descripcion.toLowerCase().includes(textoABuscar) ||
              x.titulo.toLowerCase().includes(textoABuscar)
            )
              filteredProducts.push(x);
          });
          setProductos(filteredProducts);
        } else {
          // Si no hay texto de búsqueda, muestra todos los productos
          setProductos(res);
        }
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, [categoria, id, textoIngresado]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;

import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <h2 className="titulo-productos">{titulo}</h2>
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {productos.length === 0 ? (
          <div className="col-12"> {/* Col de ancho completo */}
            <h3 className="texto-centrado">No se encontraron resultados</h3>
          </div>
        ) : (
          productos.map((prod) => {
            return (
              <div key={prod.id} className="col">
                <Item producto={prod} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ItemList;

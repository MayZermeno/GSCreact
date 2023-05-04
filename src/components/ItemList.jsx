import Item from "./Item";
import React from "react";


const ItemList = ({ productos }) => {
    return (
        <div className="container">
                            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
     
            {
                productos.length > 0 &&
                productos.map((producto) => {
                    return (
                        
                              <div key={producto.id} className="col">
                                    <Item  producto={producto} />
          
                                    </div>
                       
                    )
                })
            }
                 </div>
                        </div>
       
    )
}

export default ItemList;
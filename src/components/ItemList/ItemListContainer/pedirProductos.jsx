import data from "../../data/productos.json"

 
//En este archivo esta alojada la funcion donde se obtienen los productos del componente Json

export const pedirProductos= ()=>{
        return new Promise ((resolve, reject)=>
        {
            setTimeout (()=>{
                resolve(data);
            }, 500)
      
        })
    }

    export const pedirItemporId = (id) => {
        return new Promise((resolve, reject) => {
          try {
            const item = data.find((el) => el.id === id);
            if (item) {
              resolve(item);
            } else {
              throw new Error("No se encontró el producto");
            }
          } catch (error) {
            reject(error);
          }
        });
      };
      

    export default pedirProductos
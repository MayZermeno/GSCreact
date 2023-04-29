import data from "../data/productos.json"

 
//En este archivo es donde se obtienen los productos del componente Json

export const pedirProductos= ()=>{
        return new Promise ((resolve, reject)=>
        {
            resolve(data)
        })
    }

    export default pedirProductos
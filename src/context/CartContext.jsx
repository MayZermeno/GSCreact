import  { createContext } from "react";
import { useState } from 'react';



export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [carrito, setCarrito]= useState([]);

    const agregarAlCarrito = (item, cantidad)=>{
    
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
    const cantidadEnCarrito = ()=> {
      return carrito.reduce((acc,prod)=> acc + prod.cantidad, 0)
    }
    
    const precioTotal=()=>{
      return carrito.reduce ((acc,prod)=>acc + prod.precio *prod.cantidad,0);
    }
    const vaciarCarrito=()=>{
      setCarrito([])
    }
    const disminuirCantidad = (id) => {
      setCarrito((prevCarrito) => {
        return prevCarrito.map((prod) => {
          if (prod.id === id) {
            const nuevaCantidad = Math.max(prod.cantidad - 1, 0);
            return { ...prod, cantidad: nuevaCantidad };
          }
          return prod;
        });
      });
    };
    
    const aumentarCantidad = (id) => {
      setCarrito((prevCarrito) => {
        return prevCarrito.map((prod) => {
          if (prod.id === id && prod.cantidad < prod.stock) {
            const nuevaCantidad = prod.cantidad + 1;
            return { ...prod, cantidad: nuevaCantidad };
          }
          return prod;
        });
      });
    }
    return <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito, disminuirCantidad, aumentarCantidad}}>
        {children}
     </CartContext.Provider>
    ;}
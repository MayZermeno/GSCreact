
import { useState } from "react";
import "./Titulo.css";

export const Titulo = () => {

const [show, setShow]= useState(true);
function handleShow () {
    setShow(!show);
    console.log(show)
}

return (

<div>

    {show === true && <h1>Ejemplo Título</h1>}
     
    <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
 </div>
 ) 
};







import Nepic from "../Nosotros/NepicUs.png";
import "./Nosotros.css"
import React from "react";


const Nosotros = () =>{
    return (
        <div className="aboutus text-center" id="nosotros">

           <div className="row">
            <div className="col-sm-12 col-md-6 verticalalign">
                <div className="informacion">
                  
                    <h3 className="titulo">SOBRE NOSOTROS</h3>
                 
                 
                                       
                    <p className="dark-text">Contamos con más de 10 años de experiencia en la industria.</p>
                    <p className="dark-text">Nuestro grupo esta dedicado a la comercializacion de productos carnicos de la más alta calidad.</p>
                   
                    <div className="resaltar"><h4>RES, POLLO, PESCADO, CERDO, FRUTAS</h4>  </div>            
             </div>
            </div>
            <div class="col-sm-12 col-md-6  d-flex align-items-center">

            <img src={Nepic} alt="" className="img-fluid"/>
</div>
           </div>
           
        </div>
    )
}

export default Nosotros;
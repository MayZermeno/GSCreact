import Congelato from "./Congelato.png";
import SCarlos from "./SCarloslogo.png";
import "./Marcas.css";
import { Link } from "react-router-dom";

const Marcas = ( )=>{
    return(
        <div className="marcas">
        <div className="titulo d-flex justify-content-center">
            <h2 className="brandtitle">Nuestras Marcas</h2>
        </div>
        <div className="row brand-img">
            <div className="col-sm-12 col-md-6 alineadovertical">
                <div className="contenedor">
                    <img src={SCarlos} className="img-fluid alico  mb-2 w-50 " alt="" id="id-marca1" data-marca="marca1"/>

                </div>
            </div>
            <div className="col-sm-12 col-md-6 alineadovertical">
                <div className="contenedor">
                    <img src={Congelato} className="img-fluid congelato  w-75 mb-1" id="id-marca1"  data-marca="marca2" alt=""/>

                </div>
            </div>
          
        
        </div>
        <div className="contenedor-boton">
        
        <button className="btn btn-warning p-3"><Link to="/Productos">Nuestros Productos</Link></button></div>
    </div>
    )
}
 export default Marcas
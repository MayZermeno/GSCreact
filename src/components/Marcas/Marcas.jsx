import Congelato from "./Congelato.png";
import alico from "./alicoH.png";
import "./Marcas.css";
import { Link } from "react-router-dom";

const Marcas = ( )=>{
    return(
        <div className="marcas">
        <div className="titulo d-flex justify-content-center">
            <h2 className="text-dark">Nuestras Marcas</h2>
        </div>
        <div className="row brand-img">
            <div className="col-sm-12 col-md-4">
                <div className="contenedor">
                    <img src={alico} className="img-fluid alico  mb-2" alt="" id="id-marca1" data-marca="marca1"/>

                </div>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className="contenedor">
                    <img src={Congelato} className="img-fluid congelato  mb-1" id="id-marca1"  data-marca="marca2" alt=""/>

                </div>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className="contenedor">
                    <img src="/Img/ptog.png" className="img-fluid mb-1 w-75"  id="id-marca1" data-marca="marca3" alt=""/>

                </div>
            </div>
        
        </div>
        <div className="contenedor-boton">
        
        <button className="btn btn-warning p-3"><Link to="/Productos">Nuestros Productos</Link></button></div>
    </div>
    )
}
 export default Marcas
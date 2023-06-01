import SCIMG from "../Nosotros/SCIMG.jpg";
import "./Nosotros.css"


const Nosotros = () =>{
    return (
        <div className="contenedor_principal">

           <div className="row">
            <div className="col-sm-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                    <h3>SOBRE NOSOTROS</h3>
                    </div>
                    <div className="card-body">
                                       
                    <p className="dark-text">Contamos con más de 10 años de experiencia en la industria.</p>
                    <p className="dark-text">Nuestro grupo esta dedicado a la comercializacion de productos carnicos de la más alta calidad.</p>
                    </div>
                    <div className="card-footer"><h5>RES, POLLO, PESCADO, CERDO, FRUTAS</h5>  </div>            
             </div>
            </div>
            <div class="col-sm-12 col-md-6 ">

            <img src={SCIMG} alt="" className="img-fluid"/>
</div>
           </div>
           
        </div>
    )
}

export default Nosotros;
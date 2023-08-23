import "./footer.css"
import React from "react";

const Footer = ()=>{

    return(
   
        <footer className="contenedor-footer">
            <div className="row row-footer">
                <div className="col-sm-12 col-md-4">
                    <div className="text-muted">
                        <a href="#navbar"> <button type="button" className="btn btn-outline-light">  Ir al menu
                    
                    </button></a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="text-muted">© Copyright CorporativoSanCarlos 2023</div>

                </div>
                <div className="col-sm-12 col-md-4">
              
                </div>
            </div>
        </footer>

    )
}
export default Footer;
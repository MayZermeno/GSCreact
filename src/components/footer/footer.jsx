import "./footer.css"

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
                    {/* <h6 className="tituloredes" id="contacto">Búscanos en nuestras redes</h6>
                    <div className="row redes row-cols-sm-1 row-cols-md-3">
                        <div className="col item-footer">

                            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram" ></i></a>

                        </div>
                        <div className="col item-footer">
                            <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook"></i></a>

                        </div>
                        <div className="col item-footer">
                            <a href="https://wa.me/+5536589951"><i className="fa-brands fa-whatsapp" ></i></a>

                        </div>
                    </div> */}
                </div>
            </div>
        </footer>

    )
}
export default Footer;
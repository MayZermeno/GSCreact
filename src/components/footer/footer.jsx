import "./footer.css"

const Footer = ()=>{

    return(
   
        <footer class="contenedor-footer">
            <div class="row row-footer">
                <div class="col-sm-12 col-md-4">
                    <div class="text-muted">
                        <a href="#navbar"> <button type="button" class="btn btn-outline-light">  Ir al menu
                    
                    </button></a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="text-muted">© Copyright CorporativoSanCarlos 2023</div>

                </div>
                <div class="col-sm-12 col-md-4">
                    {/* <h6 class="tituloredes" id="contacto">Búscanos en nuestras redes</h6>
                    <div class="row redes row-cols-sm-1 row-cols-md-3">
                        <div class="col item-footer">

                            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram" ></i></a>

                        </div>
                        <div class="col item-footer">
                            <a href="https://www.facebook.com/"> <i class="fa-brands fa-facebook"></i></a>

                        </div>
                        <div class="col item-footer">
                            <a href="https://wa.me/+5536589951"><i class="fa-brands fa-whatsapp" ></i></a>

                        </div>
                    </div> */}
                </div>
            </div>
        </footer>

    )
}
export default Footer;
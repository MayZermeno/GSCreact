import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import logo from "../NavBar/assets/logo.png";

const NavBar = () => {

return (  
  <nav class="navbar navbar-dark navbar-expand-lg" id="navbar">
  <div class="container-fluid d-flex justify-content-between align-items-center">
      <a class="navbar-brand mx-3" href="./index.html">
          <img src={logo} alt="" width="100"/>
      </a>

      <button class="navbar-toggler  mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
      <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav justify-content-end">
          
              <li><a href="#">
          Nosotros
               </a></li>
              <li><a href="#">
 Marcas
      </a></li>
              <li> <a href="#">
       Servicios
      </a></li>
              <li><a href="#">
          Contacto
      </a></li>
          </ul>

      </div>




  </div>
  <CartWidget/>
</nav>



  
  
  )
}

export default NavBar
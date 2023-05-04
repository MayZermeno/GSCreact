import CartWidget from "../CartWidget/CartWidget";
import React from "react";
import "./NavBar.css";
import logo from "../NavBar/assets/logo.png";

const NavBar = () => {

return (  
  <nav className="navbar navbar-dark navbar-expand-lg" id="navbar">
  <div className="container-fluid d-flex justify-content-between align-items-center">
      <a className="navbar-brand mx-3" href="./index.html">
          <img src={logo} alt="" width="100"/>
      </a>

      <button className="navbar-toggler  mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
      <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav justify-content-end">
          
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


      <CartWidget/>

  </div>

</nav>



  
  
  )
}

export default NavBar
import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../NavBar/assets/Newlogo.png";
import { Link } from "react-router-dom";
import Search from "./Search";
// import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsNavbarScrolled(true);
    } else {
      setIsNavbarScrolled(false);
    }
  };

  return (
    <nav
      className={`navbar navbar-dark navbar-expand-lg ${
        isNavbarScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand mx-3" to="/">
          <img src={logo} alt="" width="100" />
        </Link>

        <button
          className="navbar-toggler  mx-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav justify-content-end">
            <li>
              <Link to="/"> Inicio</Link>
            </li>
            <li>
  <a href="/#nosotros"> Nosotros</a>
</li>
<li>
  <a href="/#marcas"> Marcas</a>
</li>
         
            <li>
            <a href="/#servicios"> Servicios</a>
            </li>
            <li>
              <Link to="/productos/Pollo"> Pollo</Link>
            </li>
            <li>
              <Link to="/productos/Res"> Res</Link>
            </li>
            <li>
              <Link to="/productos/Cerdo"> Cerdo</Link>
            </li>
            <li>
              <Link to="/productos/Pescado"> Pescado</Link>
            </li>
          </ul>
          {/* <CartWidget /> */}
          {<Search/>}
        </div>
      </div>
    </nav>
    
  );
};

export default NavBar;

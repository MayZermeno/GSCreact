import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "./assets/logoSCp.png";
import { Link, useLocation} from "react-router-dom";
import Search from "../Search/Search";

// import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const location = useLocation();
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
          className={`navbar navbar-dark  navbar-expand-lg ${isNavbarScrolled ? "navbar-scrolled" : ""
            }`}>  
            <div className="col-12">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <Link className="navbar-brand mx-4" to="/">
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
          {location.pathname === '/' ? (
            <a href="/#inicio">Inicio</a>
          ) : (
            <Link to="/">Inicio</Link>
          )}
        </li>
             
        <li>
          {location.pathname === '/' ? (
            <a href="/#marcas">Marcas</a>
          ) : (
            <Link to="/#marcas">Marcas</Link>
          )}
        </li>
        <li>
          {location.pathname === '/' ? (
            <a href="/#nosotros">Nosotros</a>
          ) : (
            <Link to="/#nosotros">Nosotros</Link>
          )}
        </li>
        <li>
          {location.pathname === '/' ? (
            <a href="/#map">Servicios</a>
          ) : (
            <Link to="/#map">Servicios</Link>
          )}
        </li>
                {/* <li>
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
                </li> */}
              </ul>
              {/* <CartWidget /> */}
           
            </div>
            <Search />

          </div>
    </div>
 
        </nav>
  );
};

export default NavBar;

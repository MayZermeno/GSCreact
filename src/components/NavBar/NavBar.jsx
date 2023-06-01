import CartWidget from "../CartWidget/CartWidget";
import React from "react";
import "./NavBar.css";
import logo from "../NavBar/assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbar navbar-dark navbar-expand-lg" id="navbar">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link className="navbar-brand mx-3" to="/">
                    <img src={logo} alt="" width="100" />
                </Link>

                <button className="navbar-toggler  mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav justify-content-end">
                        <li><Link to="/"> Inicio</Link></li>
                        <li><Link to="/Nosotros"> Nosotros </Link></li>
                        <li><Link to="/productos/Fritos"> Fritos y Empanizados</Link></li>
                        <li><Link to="/productos/Pollo"> Pollo</Link></li>
                        <li><Link to="/productos/Res"> Res</Link></li>
                        <li><Link to="/productos/Cerdo"> Cerdo</Link></li>
                        <li><Link to="/productos/Pescado"> Pescado</Link></li>  
                               
                    </ul>
                    <CartWidget />      
                </div>


                

            </div>

        </nav>





    )
}

export default NavBar
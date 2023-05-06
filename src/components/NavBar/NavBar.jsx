import CartWidget from "../CartWidget/CartWidget";
import React from "react";
import "./NavBar.css";
import logo from "../NavBar/assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbar navbar-dark navbar-expand-lg" id="navbar">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link clLinkssName="navbar-brand mx-3" to="/">
                    <img src={logo} alt="" width="100" />
                </Link>

                <button className="navbar-toggler  mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav justify-content-end">

                        <li><Link to="/Nosotros"> Nosotros </Link></li>
                        <li><Link to="/Marcas"> Marcas</Link></li>
                        <li><Link to="/Contacto"> Contacto</Link></li>
                    </ul>

                </div>


                <CartWidget />

            </div>

        </nav>





    )
}

export default NavBar
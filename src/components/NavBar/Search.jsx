import React from 'react';
import {RiSearchLine } from "react-icons/ri";

const Search = () => {
  
  return (
    <div className="search">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="flex-wrap">
          <div id="search-form" className="d-flex mx-0" role="search">
            <input className="form-control search_input" type="search" placeholder="Buscar" aria-label="Search" id="busqueda" />
            <button className="btn btn-outline-warning search_icon " type="submit" id="boton-busqueda">
            <RiSearchLine className='icono-search'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

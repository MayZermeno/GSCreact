import React from 'react';


const Search = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="flex-wrap">
          <div id="search-form" className="d-flex mx-0" role="search">
            <input className="form-control" type="search" placeholder="Buscar" aria-label="Search" id="busqueda" />
            <button className="btn btn-outline-warning" type="submit" id="boton-busqueda">
              <i className="fa-solid ">{}</i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Search;

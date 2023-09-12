import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useSearchContext } from '../Search/SearchContext'; // Importa el hook de contexto
import { searchEventEmitter } from '../Search/SearchEvents'; // Importa el evento personalizado
import { Link } from 'react-router-dom';


const Search = () => {
  const { textoIngresado, setTextoIngresado } = useSearchContext(); // Accede al contexto

  const textoIngresadoBusqueda = (e) => {
    const nuevoTextoIngresado = e.target.value;
    setTextoIngresado(nuevoTextoIngresado); // Actualiza el valor en el contexto cuando el input cambie
  };

  const botonBusquedaIngresada = () => {
    // Emitir un evento personalizado con el texto de búsqueda
    searchEventEmitter.emit('search', textoIngresado);
    // Puedes descomentar esta línea si deseas ver el valor en la consola
    // console.log('Realizar búsqueda con', textoIngresado); // Llamar a la función de búsqueda al hacer clic en el botón
  };

  return (
    <div className="search">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="flex-wrap">
          <div id="search-form" className="d-flex mx-0" role="search">
            <input
              className="form-control search_input"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              id="busqueda"
              value={textoIngresado} // Mostrar el valor actual del contexto en el input
              onChange={textoIngresadoBusqueda}
            />

            {/* Puedes tener un botón para activar la búsqueda si lo deseas */}
            <Link to="/productos">
      <button className="btn btn-outline-warning search_icon" type="submit" id="boton-busqueda" onClick={botonBusquedaIngresada}>
        <RiSearchLine className="icono-search" />
      </button>
    </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;


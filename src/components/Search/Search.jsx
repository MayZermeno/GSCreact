import React, {useState} from 'react';
import {RiSearchLine } from "react-icons/ri";
import ItemListContainer from '../ItemListContainer/ItemListContainer';


const Search = ({onSearch}) => {
  const [search, setSearch]=useState('');
  const handleInputChange = (e)=>{
    setSearch(e.target.value)
  };
  const handleSearchClick =()=>{
    onSearch(search)
  }
  

  
  return (
    <div className="search">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="flex-wrap">
          <div id="search-form" className="d-flex mx-0" role="search">
            <input className="form-control search_input"
             type="search" 
             placeholder="Buscar" 
             aria-label="Search" 
             id="busqueda" 
             value={search}
              onChange={handleInputChange}/>

            <button className="btn btn-outline-warning search_icon"
             type="submit"
              id="boton-busqueda"
              onClick={handleSearchClick}>
                
            <RiSearchLine className='icono-search'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

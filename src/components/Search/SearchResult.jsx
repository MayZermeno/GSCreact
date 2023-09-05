import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const SearchResult = ({ searchResults }) => {
  return (
    <div className="container mt-5">
    <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
      <h2>Resultados de búsqueda</h2>
      <div>
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((item) => (
            <ItemDetail key={item.id} item={item} />
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default SearchResult;

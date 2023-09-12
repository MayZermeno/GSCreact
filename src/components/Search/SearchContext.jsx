import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [textoIngresado, setTextoIngresado] = useState('');

  return (
    <SearchContext.Provider value={{  textoIngresado,  setTextoIngresado }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  return useContext(SearchContext);
}



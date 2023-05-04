import './App.css';
import React from 'react';
// import { Titulo } from './components/Titulo/Titulo';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return ( 
    <div className='App'>

      
      <NavBar/>
      
      <ItemListContainer greeting={'Bienvenidos'}/>
   

      {/* <Titulo/>    */}

    </div>
    );
}

export default App;

import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Marcas from './components/Marcas/Marcas';
import Footer from './components/footer/footer';
import Main from './components/Main';


// import { Titulo } from './components/Titulo/Titulo';

function App() {
    return ( 
  
<BrowserRouter>
      
      <NavBar/>
      <Routes>
      <Route path='/' element= { <Main />} />
        <Route path='/productos' element= { <ItemListContainer />} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/marcas' element={<Marcas/>} />
        <Route path='item' element={<ItemDetailContainer/>} />
       
      </Routes>

<Footer/>


      {/* <Titulo/>    */}
      </BrowserRouter>
  
    );
}

export default App;

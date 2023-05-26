import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Marcas from './components/Marcas/Marcas';
import Footer from './components/footer/footer';
import Main from './components/Main/Main';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart';

import {CartProvider} from './context/CartContext';



function App() {


    return ( 

<CartProvider>
  <BrowserRouter>
        
        <NavBar/>
        <Routes>
        <Route path='/' element= { <Main />} />
        <Route path='/productos' element= { <ItemListContainer />} />
          <Route path='/productos/:categoria' element= { <ItemListContainer />} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/marcas' element={<Marcas/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
        
        </Routes>

  <Footer/>


    
        </BrowserRouter>
        </CartProvider>
    );
}

export default App;

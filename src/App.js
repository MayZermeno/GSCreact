import './App.css';
import {getFirestore,doc, getDoc,} from 'firebase/firestore'
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
import { useEffect, useState } from 'react';





function App() {
  const [productos, setProductos]= useState(); 
  useEffect(()=>{
    const db = getFirestore();
    
    const productosRef = doc( db, "Productos", "1");
    getDoc(productosRef).then((snapshot)=>{
      if (snapshot.exists()){
        setProductos({id: snapshot.id, ...snapshot.data() });
      }
    })
    },[]);
    console.log(productos)

    return ( 
     <div className='body'>
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
        </div>
    );
}

export default App;

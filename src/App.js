import './App.css';
import { Titulo } from './components/Titulo/Titulo';
import Counter from "./components/Contador/Contador";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return ( 
    <div className='App'>

      
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>


      <Titulo/>   
      <Counter/>
    </div>
    );
}

export default App;

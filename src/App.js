import './App.css';
// import { Titulo } from './components/Titulo/Titulo';
import Counter from "./components/Contador/Contador";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return ( 
    <div className='App'>

      
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>


      {/* <Titulo/>    */}
      <Counter initial={1} stock={8} onAdd={(quantity)=> console.log('cantidad agregada', quantity)
      }/>
    </div>
    );
}

export default App;

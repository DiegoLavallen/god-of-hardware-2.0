
import './App.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'

function App() {
  return (
    
    <>
      <header>
        <NavBar/>
      </header>

      <ItemListContainer greeting='Hola, bienvenido a GOD OF HARDWARE'/>
    </>
  );
}

export default App;

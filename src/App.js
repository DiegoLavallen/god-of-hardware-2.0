import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar.js';
import ItemDetailContainer from './Components/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer';

function App() {

  
  


  return (
    
    <div>
      {/* El header va a quedar fijo */}
        <header>
          <NavBar />
        </header>
          
      <main>
        <div className='desktop-container'>
          {/* Aca vamos a mostrar las diferentes "pantallas"(componentes) */}

        <Routes>

          {/* Esta es la pantalla de "Home" y mostramos el componente ItemListContainer */}
          <Route path="/"
           element={<ItemListContainer /> }
            />

            <Route
            path="/category/:categoryName"
            element={<ItemListContainer /> }
             />
              
            

          {/* Esta es la pantalla dinamica de cada uno de los productos */}
          <Route
            path="/producto/:productId"
            element={<ItemDetailContainer />}
           />  

        </Routes>

        </div>

      </main>


    </div>    
   
    
  );

}



export default App;

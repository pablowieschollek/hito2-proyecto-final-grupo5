import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
//import MyContext from './MyContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import {useState, useEffect} from 'react';
//importación de vistas 
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/Registro';
import Perfil from './views/Perfil';
import Formulario from './views/Formulario';
import Galeria from './views/Galeria';
import InfoProducto from './views/InfoProducto';
import Favoritos from './views/Favoritos';
import EnVenta from './views/EnVenta';
import NotFound from './views/NotFound';
//importación de componentes
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
 //const [pokemon, setPokemon] = useState([]);
//const estadoGlobal = {pokemon, setPokemon}
 //<MyContext.Provider value={estadoGlobal}>
      //</MyContext.Provider>  

  return (
    <div className="App">
      
        < BrowserRouter >
          < Navbar />
            < Routes>
              < Route path="/" element={< Home />} />
              < Route path="/login" element={< Login />} />
              < Route path="/registro" element={< Registro />} />
              < Route path="/perfil" element={< Perfil />} />
              < Route path="/formulario" element={< Formulario />} />
              < Route path="/galeria" element={< Galeria />} />
              < Route path="/infoproducto" element={< InfoProducto />} />
              < Route path="/favoritos" element={< Favoritos />} />
              < Route path="/enventa" element={< EnVenta />} />
              < Route path="*" element={<NotFound/>}/>
            </ Routes >    
        </ BrowserRouter >    
    </div>
  );
}

export default App;
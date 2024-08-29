import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './Pages/Home'
import Maraton from './Pages/Maraton';
import Pelicula from './Pages/Pelicula';
import PeliculasAnteriores from './Pages/PeliculasAnteriores';
import Registro from './Pages/Registro';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maraton" element={<Maraton />} />
      <Route path="/pelicula" element={<Pelicula/>} />
      <Route path="/peliculasAnteriores" element={<PeliculasAnteriores/>} />
        <Route path="/registro" element={<Registro/>} />  

      
    </Routes>
  </Router>
  )
}

export default App

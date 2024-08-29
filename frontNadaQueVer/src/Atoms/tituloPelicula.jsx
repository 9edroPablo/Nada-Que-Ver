import React from "react";
import './Style/tituloPelicula.css'
import pelicula from '../assets/mid90s.jpg'

const TituloPelicula = () => {
    return (
      <div className="image-container">
        <img src={pelicula} alt="Example" className="image" />
        <div className="text-overlay">Mid90S</div>
      </div>
    );
  };
  
  export default TituloPelicula;
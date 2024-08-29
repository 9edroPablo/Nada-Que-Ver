import React from "react";
import { Header } from "../Atoms/header";
import { Categorias } from "../Atoms/categorias";
import { Link } from 'react-router-dom';

import NQV from "../assets/NQV2.jpg";
import mid90s from '../assets/mid90s.jpg'
import CasaBlanca from '../assets/casaBlanca.jpeg'

import Resplandor from '../assets/hotel-el-resplandor-pasillo.jpg'



function SectionHome() {
  

  return (
    <section className="SectionHome">
      <Header />
      <img className="NQVHome" src={NQV} alt="IMAGEN DEL DIRECTOR ITALIANO" />
      <div className="SectionCategorias">
      <li><Link to="/pelicula"><Categorias imageSrc={CasaBlanca} title="Pelicula de la semana" /></Link></li>
        
        <div className="ContainerSecundario">
          <div className="SectionCategoriasPA">
          <li><Link to="/peliculasAnteriores"><Categorias imageSrc={mid90s} title="Semanas anteriores" /></Link></li>
            
          </div>
          <div className="SectionCategoriasMaraton">
          <li><Link to="/maraton"><Categorias imageSrc={Resplandor} title="Maraton" /></Link></li>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHome;
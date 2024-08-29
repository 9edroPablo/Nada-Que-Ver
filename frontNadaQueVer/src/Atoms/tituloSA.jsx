import React from "react";
import './Style/tituloSA.css'
import camara from "../assets/camara-de-video.png"

 function TituloSA(){
    return(
    <section className=" TituloSA">
        <div className="decorationSA">
        <div className="line"></div>
        <img className="camara" src={camara} alt="Camara" />
        <div className="line"></div>
        </div>
        <p>Semanas anteriores</p>
    </section>
    )
} 
export default TituloSA;
import React from "react";
import { Header } from "../Atoms/header";
import TituloSA from "../Atoms/TituloSA";
import { BoxPelisSA } from "../Molecules/BoxPelisSA";
import '../Pages/style/semanasAnteriores.css'


export function SectionSemanasAntriores(){
 return(
    <section className="SectionSemanasAntriores">
        <Header/>
        <TituloSA/>
        <BoxPelisSA/>
        
    </section>
 )
}

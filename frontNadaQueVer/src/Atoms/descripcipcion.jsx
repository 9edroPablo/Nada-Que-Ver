import React from "react";
import poster from "../assets/mid90Poster.png"
import './Style/descripcion.css'


export function Descripcion (){

    const text = `"Mid90s" es una película dirigida por Jonah Hill que narra la historia de Stevie, un niño de 13 años que vive en Los Ángeles durante la década de los 90. La película sigue a Stevie mientras se adentra en el mundo del skateboarding, encontrando un grupo de amigos mayores que le ofrecen una nueva perspectiva de vida. A través de su relación con estos skaters, Stevie experimenta la emoción, los desafíos y las lecciones que vienen con la adolescencia.
    La película captura la esencia de la juventud de esa época, desde la cultura del skate hasta la música y la moda, ofreciendo un retrato auténtico de lo que significa crecer en un entorno donde las amistades y las experiencias moldean la identidad. Con una atmósfera nostálgica y un enfoque crudo y honesto, "Mid90s" explora temas de pertenencia, identidad, y la búsqueda de un lugar en el mundo sin recurrir a clichés ni sentimentalismos.`;
    const paragraphs = text.split('\n').map((para, index) => <p key={index}>{para}</p>); 

    return (
        <section className="Descripcion">
            <img src={poster} />

            <div className="text-container">{paragraphs}</div>;
        </section>
        
    )
}


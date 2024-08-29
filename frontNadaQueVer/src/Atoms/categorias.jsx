import React from "react";
import './Style/categorias.css';

export function Categorias({ imageSrc,  title }) {
    return (
        <section className="categoria-container">
            <div className="overlay">
                <p className="titulo">{title}</p>
            </div>
            <img src={imageSrc} alt={title} />
        </section>
    );
}


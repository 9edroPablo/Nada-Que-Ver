import React from "react";

export function DondeVerlo({ platforms }) {
    return (
        <section style={sectionStyle}>
            {platforms.map((platform, index) => (
                <a href={platform.link} key={index} style={linkStyle}>
                    <img src={platform.image} alt={platform.name} style={imageStyle} />
                    <span style={textStyle}>{platform.name}</span>
                </a>
            ))}
        </section>
    );
}

const sectionStyle = {
    marginLeft: '40px',
    marginTop: '40px',
    display: 'flex',  // Coloca los elementos en una fila
    justifyContent: 'start',  // Alinea los elementos al centro de la sección
    gap: '20px'  // Espacio entre las imágenes
};

const linkStyle = {
    display: 'flex',
    flexDirection: 'column',  // Coloca el texto debajo de la imagen
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    marginBottom: '10px'
};

const imageStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover'
};

const textStyle = {
    color: 'white',  // Hace que el texto sea blanco
    marginTop: '5px'  // Espacio entre la imagen y el texto
};

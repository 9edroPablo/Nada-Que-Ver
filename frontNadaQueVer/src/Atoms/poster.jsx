import React from "react";
import mid90Poster from "../assets/mid90Poster.png";
import './Style/poster.css';

export function Poster({ className, style, classNamei  }) {
    return (
        <section className={`poster-container ${className}`} style={style}>
            <img src={mid90Poster} alt="Mid90s Poster" />
            <div className={`info ${classNamei}`}>
                <p>Mid90s</p>
                <p>2018</p>
                <p>Jonah Hill</p>
            </div>
        </section>
    );
}

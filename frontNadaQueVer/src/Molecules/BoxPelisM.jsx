import React from "react";
import { Poster } from "../Atoms/poster";
import './Style/BoxPelisM.css'; 

export function BoxPelisM() {
    const posters = Array.from({ length: 31 }).map((_, index) => (
        <Poster key={index} className="small-poster" classNamei="small-posteri"/>
    ));

    return (
        <section className="poster-grid">
            {posters}
        </section>
    );
}

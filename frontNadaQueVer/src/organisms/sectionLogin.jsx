import React from "react";
import { Header } from "../Atoms/header";
import '../Pages/style/registro.css';

export function SectionLogin() {
    return (
        <section className="login-section">
            <Header />
            <section className="Cundapi">

            
            <div className="login-container">
                <div className="login-box registro">
                    <h2>REGISTRO</h2>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Nombre" />
                </div>
                <div className="login-box login">
                    <h2>INICIO DE SESION</h2>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Nombre" />
                </div>
            </div>
            </section>
        </section>
    );
}

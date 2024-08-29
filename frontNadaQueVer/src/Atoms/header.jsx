import React from "react";
import { Link } from 'react-router-dom';
import './Style/header.css'

export function Header (){
    return(
        <section className="header">
             <div className="logo"><h1>Nada que</h1>
            <h1>ver</h1>
            </div>
            <li><Link to="/registro"><p className="login">login</p></Link></li>
            
            
        </section>
           
        
    )
}

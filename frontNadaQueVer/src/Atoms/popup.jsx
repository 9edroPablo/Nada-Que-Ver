
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Style/Popup.css';
import poster from "../assets/Frankenstein.png"

const Popup = ({ show, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.className === 'popup') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h1>DIA 1</h1>
        <Link to="/pelicula">
        <img src={poster} alt="Frankenstein Poster" />
        </Link>
        
        <p>FRANKENSTEIN</p>
      </div>
    </div>
  );
};

export default Popup;

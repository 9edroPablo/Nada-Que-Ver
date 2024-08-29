import React, { useState } from 'react';

import  { Header } from "../Atoms/header"
import { BoxPelisM } from "../Molecules/BoxPelisM";
import Popup from "../Atoms/Popup";


function SectionMaraton (){


    const [showPopup, setShowPopup] = useState(true); // Por defecto, mostrar el pop-up

  const closePopup = () => {
    setShowPopup(false);
  };

    return(
        <section className="SectionMaraton">
            <Header/>
            <Popup show={showPopup} onClose={closePopup} />
            <p className='MaratonTitle'>Maraton</p>
            <BoxPelisM/>



        </section>
    )
}
export default SectionMaraton;
import React, { useState, useRef} from 'react';
import './Page.css';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const handleButtonYesClick = () => {
    alert("Одобряю!!!)")
  }

export const Page = () => {

    return(
        <div className="window">
            Вы согласны работать бесплатно?
            <button 
                className="window__button-yes"
                onClick={handleButtonYesClick}>
                Да
            </button>
            {<ButtonNo />}
 
        </div>
    );
}

const ButtonNo = () => {
    const propDOM = useRef(null);

    const handleButtonOnMouseOver = () => {
        propDOM.current.style = "left: " + getRandomInt(0, 25) + 
        "rem; top: " + getRandomInt(0, 18) + "rem"
      }

    return (
        <button 
            className="window__button-no"
            onMouseOver={handleButtonOnMouseOver}
            ref = {propDOM}>
            Нет
        </button>
    );
}

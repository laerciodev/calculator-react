import React, { useState } from 'react';
import './styles.css';

const Calculator = () => {

    const [numberInput, setNumberInput] = useState('');

    return (
        <div className="calculator">
        <p id="tagline">eletronic calculator</p>
        <input id="answer" className="panel" type="text" value={numberInput} disabled="disabled" />  
        <div className="row">
            <button className="button ctrl">AC</button>
            <button className="button ctrl">CE</button>
            <button className="button">&#37;</button>
            <button className="button">&#247;</button>  
        </div>
        <div className="row">
            <button className="button">7</button>
            <button className="button">8</button>
            <button className="button">9</button>
            <button className="button">x</button>
        </div>
        <div className="row">
            <button className="button">4</button>
            <button className="button">5</button>
            <button className="button">6</button>
            <button className="button">-</button>
        </div>
        <div className="last-rows">
            <div className="rows">
                <div className="row">
                    <button className="button">1</button>
                    <button className="button">2</button>
                    <button className="button">3</button>
                </div>
                <div className="row">
                    <button className="button">0</button>
                    <button className="button">.</button>
                    <button className="button">&#61;</button>
                </div>
            </div>
            <button className="button sum">+</button> 
        </div> 
    </div>
    )
}
;

export default Calculator;
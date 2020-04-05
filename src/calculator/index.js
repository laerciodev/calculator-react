import React, { useState } from 'react';
import './styles.css';
import CalculatorService from './calculator.service';

const Calculator = () => {

    const [ calculate, concatNumbers, SUM, SUBS, MULT, DIV] = CalculatorService();

    const [ numberInput, setNumberInput ] = useState('');
    const [ number1, setNumber1 ] = useState(null);
    const [ number2, setNumber2 ] = useState(null);
    const [ operation, setOperation] = useState(null);

    function addNumber(number) {
        let result;
        if (operation === null) {
            result = concatNumbers(number1, number);
            setNumber1(result)
        } else {
            result = concatNumbers(number2, number);
            setNumber2(result);
        }

        setNumberInput(result);
    }

    function defineOperation(op) {
        // defines operation, case hasn't operation
        if (operation === null) {
            setOperation(op);
            return;
        }

        // case: operation is definided and number2 selected, then calculate operation
        if (number2 !== null ) {
            const result = calculate(parseFloat(number1), parseFloat(number2), operation);
            setOperation(op);
            setNumber1(result.toString());
            setNumber2(null);
            setNumberInput(result.toString())
        }

    }

    function actionCalculate() {
        if (number2 === null) {
            return;
        }

        const result = calculate(parseFloat(number1), parseFloat(number2), operation);
        setNumberInput(result);
    }

    function clear() {
        setNumberInput('0');
        setNumber1('0');
        setNumber2(null);
        setOperation(null);
    }

    return (
        <div className="calculator">
        <p id="tagline">eletronic calculator</p>
        <input id="answer" className="panel" type="text" value={numberInput} disabled="disabled" />  
        <div className="row">
            <button className="button ctrl" onClick={ clear }>AC</button>
            <button className="button ctrl">CE</button>
            <button className="button" onClick={() => defineOperation('%')}>&#37;</button>
            <button className="button" onClick={() => defineOperation('/')}>&#247;</button>  
        </div>
        <div className="row">
            <button className="button" onClick={() => addNumber(7)}>7</button>
            <button className="button" onClick={() => addNumber(8)}>8</button>
            <button className="button" onClick={() => addNumber(9)}>9</button>
            <button className="button" onClick={() => defineOperation('x')}>x</button>
        </div>
        <div className="row">
            <button className="button" onClick={() => addNumber(4)}>4</button>
            <button className="button" onClick={() => addNumber(5)}>5</button>
            <button className="button" onClick={() => addNumber(6)}>6</button>
            <button className="button" onClick={() => defineOperation('-')}>-</button>
        </div>
        <div className="last-rows">
            <div className="rows">
                <div className="row">
                    <button className="button" onClick={() => addNumber(1)}>1</button>
                    <button className="button" onClick={() => addNumber(2)}>2</button>
                    <button className="button" onClick={() => addNumber(3)}>3</button>
                </div>
                <div className="row">
                    <button className="button" onClick={() => addNumber(0)}>0</button>
                    <button className="button" onClick={() => addNumber('.')}>.</button>
                    <button className="button" onClick={ actionCalculate }>&#61;</button>
                </div>
            </div>
            <button className="button sum" onClick={() => defineOperation('+')}>+</button> 
        </div> 
    </div>
    )
}
;

export default Calculator;
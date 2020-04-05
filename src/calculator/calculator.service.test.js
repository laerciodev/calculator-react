import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorService from './calculator.service';

describe('Teste do Calculadora Service', () => {
    const [calculate, concatNumbers, SUM, SUBS, MULT, DIV] = CalculatorService();

    it('deve garantir que 1 + 4 = 5', () => {
        let sum = calculate(1, 4, SUM);
        expect(sum).toEqual(5);
    });

    it('deve garantir que 1 - 4 = -3', () => {
        let sub = calculate(1, 4, SUBS);
        expect(sub).toEqual(-3);
    })

    it('deve garantir que 1 x 4 = 4', () => {
        let mult = calculate(1, 4, MULT);
        expect(mult).toEqual(4);
    });

    it('deve garantir que 1 / 4 = 0.25', () => {
        let div = calculate(1, 4, DIV);
        expect(div).toEqual(0.25);
    })

    it('deve retornar 0 para operação inválida!', () => {
        let invalidOperation = calculate(1, 4, '%');
        expect(invalidOperation).toEqual(0);
    });
});


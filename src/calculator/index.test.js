import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './index';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora', () => {

    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Calculator />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    
    it('deve limpar o campo de números', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('AC'));
        expect(getByTestId('answer')).toHaveValue('')
    });

    it('deve somar 2 + 3 e obter 5', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('answer')).toHaveValue('5');
    });

    it('deve subtrair 2 - 3 e obter -1', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('-'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('answer')).toHaveValue('-1');
    });

    it('deve multiplicar 2 x 3 e obter 6', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('x'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('answer')).toHaveValue('6');
    });
})

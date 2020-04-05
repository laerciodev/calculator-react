export default function CalculatorService() {

    const SUM = '+';
    const SUBS = '-';
    const MULT = 'x';
    const DIV = '/';

    function calculate(num1, num2, operacao) {
        let result;

        switch(operacao) {
            case SUM: 
                result = num1 + num2;
                break;
            case SUBS:
                result = num1 - num2;
                break;
            case MULT:
                result = num1 * num2;
                break;
            case DIV:
                result = num1 / num2;
                break;
            default:
                result = 0;
        }

        return result;
    }

    function concatNumbers(currentNumber, numConcat) {
        // case 0 or null, reset the value
        if (currentNumber === '0' || currentNumber === null) {
            currentNumber = ''; 
        }

        // first digit equal to '.', concats '0' before point
        if (numConcat === '.' && currentNumber === '') {
            return '0.'
        }

        // case '.' typed and already contain a dot, only returns
        if (numConcat === '.' && currentNumber.indexOf('.') > -1) {
            return currentNumber;
        } 

        return currentNumber + numConcat;
    }

    return [ calculate, concatNumbers, SUM, SUBS, MULT, DIV ];
}
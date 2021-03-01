// node --experimental-json-modules src/CalculatorAssist.mjs

import { question } from 'readline-sync';
import calculator from './Calculator.mjs';

function showPrompt(){
    console.clear();
    while(true){
        let inputData = question('Enter number or operation : ');

        if(inputData !== '='){
            calculator.appendData( inputData );
            console.log(calculator.getInputDatasMessage());
        } else {
            console.log(calculator.getInputDatasMessage() + '=' + calculator.calculate());
            break;
        }
    }
}

showPrompt();
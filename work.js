"use strict";


let result = '';


for(let i = 0; i < 6; i++) {

    for(let k = 0; k < 6 - i; k++) {
        result += ' ';
    }

    for(let j = 1; j < i * 2; j++) {
       result += '*';
    }

    
    result += '\n';
}

console.log(result);
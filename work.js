"use strict";


function fibonacci(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
    return '';
}
        let str= '';
    let one = 0;
    let two = 1;
    let three;
    for(let i = 0; i < num; i++){
        if(i + 1 === num) {
            str += `${one}`;
        } else {
            str += `${one}`;
        }
        three = one + two;
        one = two;
        two = three;
    }
    return str;
}
console.log(fibonacci(1));




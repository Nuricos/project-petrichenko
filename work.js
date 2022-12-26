"use strict";

function getTimeFromMinutes(num) {
  
        let time = '';
        let houre = Math.floor(num / 60);
        let minut = num % 60;

    if(typeof(houre) !== 'number' || houre < 0 || !Number.isInteger(houre)) {
        return "Ошибка, проверьте данные";
    }

    switch(houre) {
        case 0: 
            time = 'часов';
            break;
        case 1:
            time = 'час';
            break;
        case 2:
        case 3:
        case 4:
            time = 'часа'; 
            break;
            default:   
            time = 'часов';         
    }    
        return `Это ${houre} ${time} и ${minut} минут`;
}

console.log(getTimeFromMinutes(50.7));

 



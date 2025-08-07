'use strict';

const counterElement = document.getElementById("clicker__counter");
let clickCount = parseInt(counterElement.textContent); 

const cookieElement = document.getElementById("cookie");

let cookieWidth = cookieElement.width;


cookieElement.onclick = function() {  
    
    clickCount++; 
    counterElement.textContent = clickCount;

    if (clickCount % 2 === 0) { 
        cookieElement.width = cookieWidth * 1.2;
    } else {
        cookieElement.width = cookieWidth;
    }

};  

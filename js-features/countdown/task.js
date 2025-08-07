'use strict';


const timer = document.getElementById('timer');
let timeLeft = parseInt(timer.textContent); 


const intervalId = setInterval(() => {
    timeLeft--; 

    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(intervalId); 
        alert('Вы победили в конкурсе!'); 
    }
}, 1000); 
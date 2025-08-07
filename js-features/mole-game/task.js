'use strict';

const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let dead = 0;
let lost = 0;

const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.onclick = () => {
    if (hole.classList.contains('hole_has-mole')) {
        dead++;
        deadCounter.textContent = dead;
        hole.classList.remove('hole_has-mole');
        if (dead === 10) {
            alert('Вы победили! Ура!!!');
            dead = 0;
            lost = 0;
            deadCounter.textContent = dead;
            lostCounter.textContent = lost;
          }
      } else {
            lost++;
            lostCounter.textContent = lost;
            if (lost === 5) {
                alert('Вы проиграли! Попробуйте еще раз!');
                dead = 0;
                lost = 0;
                deadCounter.textContent = dead;
                lostCounter.textContent = lost;
            }
        }
    }
}

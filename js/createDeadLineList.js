
import { locationList } from './filter.js';


function createDeadLineList() {
    const radio = document.querySelector("input[type='radio'][name='term']:checked");
    const arrDeadLine = [];

   

    if(radio.classList.contains('any')) {
        locationList.forEach(deadline => {
            if(deadline.offer.deadline) {
                arrDeadLine.push(deadline);
            }
        });
    }

    

    if(radio.classList.contains('passed')) {
        locationList.forEach(deadline => {
            if(deadline.offer.deadline === 'Сдан') {
                arrDeadLine.push(deadline);
            }
        });
    }
    return arrDeadLine;
}

export { createDeadLineList };

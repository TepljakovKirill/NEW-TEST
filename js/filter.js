import { arrayCard } from './createCard.js';
import { card } from './createCard.js';
import { createList } from './createCard.js';
import { createDeadLineList } from './createDeadLineList.js';

const buttonFilter = document.querySelector('.form-btn--submit');
const idRadio = document.querySelector("input[type='checkbox'][name='group']:checked");

function clearList() {
    card.innerHTML = "";
}

let locationList = [];

buttonFilter.addEventListener('click', (evt) => {
    evt.preventDefault();
    
    // если выбран диапазон времени от дома до метро ДО 10 МИНУТ
    if(idRadio.classList.contains('upToTen')) {
        clearList();
        
        arrayCard.forEach(time => {
            if(time.offer.timeToMetro <= 10) {
                locationList.push(time);
            }
        });

        // const arrDeadLine = [];
        // if(radio.classList.contains('passed')) {
        //     locationList.forEach(deadline => {
        //         if(deadline.offer.deadline === "Сдан") {
        //             arrDeadLine.push(deadline);
        //         } 
        //     });
        // }
        const dead = createDeadLineList();
        console.log(dead);
        createList(dead);
    }

    // если выбран диапазон времени от дома до метро ОТ 10 - 20 МИНУТ
    if(idRadio.classList.contains('tenTwenty')) {
        clearList();

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro > 10 && time.offer.timeToMetro <= 20 ) {
                locationList.push(time);
            }
        });
        
        const dead = createDeadLineList();
        console.log(dead);
        createList(dead);
    }

    // если выбран диапазон времени от дома до метро ОТ 20 - 30 МИНУТ
    if(idRadio.classList.contains('twentyThirty')) {
        clearList();

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro > 20 && time.offer.timeToMetro <= 30 ) {
                locationList.push(time);
            }
        });
        
        createList(locationList);
    }

     // если выбран диапазон времени от дома до метро БОЛЬШЕ 30 МИНУТ
     if(idRadio.classList.contains('moreThanThirty')) {
        clearList();

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro > 30 ) {
                locationList.push(time);
            }
        });
        
        createList(locationList);
    }

    // если выбран диапазон времени ЛЮБОЙ
    if(idRadio.classList.contains('any')) {
        clearList();

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro) {
                locationList.push(time);
            }
        });
        
        createList(locationList);
    }

})

export { locationList };






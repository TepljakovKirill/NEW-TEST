import { arrayCard } from './createCard.js';
import { card } from './createCard.js';
import { createList } from './createCard.js';
import { createDeadLineList } from './createDeadLineList.js';

const buttonFilter = document.querySelector('.form-btn--submit');

function clearLocationList() {
    locationList = [];
}

let locationList = [];

buttonFilter.addEventListener('click', (evt) => {
    evt.preventDefault();
    card.innerHTML = "";

    const idRadio = document.querySelector("input[type='checkbox'][name='group']:checked");

    // если выбран диапазон времени от дома до метро ДО 10 МИНУТ
    if(idRadio.classList.contains('upToTen')) {
        
        arrayCard.forEach(time => {
            if(time.offer.timeToMetro <= 10) {
                locationList.push(time);
            }
        });

        const dead = createDeadLineList();
        console.log(dead);
        createList(dead);
        clearLocationList();
    }

    // если выбран диапазон времени от дома до метро ОТ 10 - 20 МИНУТ
    if(idRadio.classList.contains('tenTwenty')) {

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro > 10 && time.offer.timeToMetro <= 20 ) {
                locationList.push(time);
            }
        });
        
        const dead = createDeadLineList();
        console.log(dead);
        createList(dead);
        clearLocationList();
    }

    // если выбран диапазон времени от дома до метро ОТ 20 - 30 МИНУТ
    if(idRadio.classList.contains('twentyThirty')) {

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro > 20 && time.offer.timeToMetro <= 30 ) {
                locationList.push(time);
            }
        });
        
        const dead = createDeadLineList();
        console.log(dead);
        createList(dead);
        clearLocationList();
    }

     // если выбран диапазон времени от дома до метро БОЛЬШЕ 30 МИНУТ
     if(idRadio.classList.contains('moreThanThirty')) {

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro > 30 ) {
                locationList.push(time);
            }
        });
        
        const dead = createDeadLineList();
        console.log(dead);
        createList(dead);
        clearLocationList();
    }

    // если выбран диапазон времени ЛЮБОЙ
    if(idRadio.classList.contains('any')) {

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro) {
                locationList.push(time);
            }
        });
        
        const dead = createDeadLineList();
        console.log(dead);
        createList(dead);
        clearLocationList();
    }

})

export { locationList };






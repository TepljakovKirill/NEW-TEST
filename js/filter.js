import { arrayCard } from './createCard.js';
import { card } from './createCard.js';
import { createList } from './createCard.js';

const buttonFilter = document.querySelector('.form-btn--submit');

function clearList() {
    card.innerHTML = "";
}

buttonFilter.addEventListener('click', (evt) => {
    evt.preventDefault();

    const idRadio = document.querySelector("input[type='checkbox'][name='group']:checked");

    // если выбран диапазон времени от дома до метро ДО 10 МИНУТ
    if(idRadio.classList.contains('upToTen')) {
        clearList();
        let locationList = [];

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro <= 10) {
                locationList.push(time);
            }
        });
        
        createList(locationList);
    }

    // если выбран диапазон времени от дома до метро ОТ 10 - 20 МИНУТ
    if(idRadio.classList.contains('tenTwenty')) {
        clearList();
        let locationList = [];

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro > 10 && time.offer.timeToMetro <= 20 ) {
                locationList.push(time);
            }
        });
        
        createList(locationList);
    }

    // если выбран диапазон времени от дома до метро ОТ 20 - 30 МИНУТ
    if(idRadio.classList.contains('twentyThirty')) {
        clearList();
        let locationList = [];

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
        let locationList = [];

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
        let locationList = [];

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro) {
                locationList.push(time);
            }
        });
        
        createList(locationList);
    }

    
})





import { arrayCard } from './createCard.js';
import { card } from './createCard.js';
import { createList } from './createCard.js';

const buttonFilter = document.querySelector('.form-btn--submit');

buttonFilter.addEventListener('click', (evt) => {
    evt.preventDefault();
    const idRadio = document.querySelector("input[type='checkbox'][name='group']:checked");
    const location = document.querySelector("label[for='"+idRadio.id+"']");
    const stop = +(location.innerHTML);

    card.innerHTML = "";
    let locationList = [];

    arrayCard.forEach(time => {
        if(time.offer.timeToMetro <= stop ) {
           locationList.push(time.offer.timeToMetro);
        }
    });

    createList(locationList);
    
})





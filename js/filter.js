import { arrayCard } from './createCard.js';
import { card } from './createCard.js';
import { createList } from './createCard.js';
import { createDeadLineList } from './createDeadLineList.js';
import { createOptionsList } from './createOptionsList.js';

const buttonFilter = document.querySelector('.form-btn--submit');

function clearLocationList() {
    locationList = [];
}

let locationList = [];
let dead = [];

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

        dead = createDeadLineList();  //отфильтрованный locationList функцией createDeadLineList добавляем в пустой массив и отправляем его на следующую фильтровку в createOptionsList

        const options = createOptionsList();  //отфильтрованный массив dead

        console.log(options);
        createList(options);  // создаём список после фильтра createDeadLineList и createOptionsList
        clearLocationList();  // чистим список для следующего обновления
    }

    // если выбран диапазон времени от дома до метро ОТ 10 - 20 МИНУТ
    if(idRadio.classList.contains('tenTwenty')) {

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro > 10 && time.offer.timeToMetro <= 20 ) {
                locationList.push(time);
            }
        });
        
        dead = createDeadLineList();  //отфильтрованный locationList функцией createDeadLineList добавляем в пустой массив и отправляем его на следующую фильтровку в createOptionsList

        const options = createOptionsList();  //отфильтрованный массив dead

        console.log(options);
        createList(options);  // создаём список после фильтра createDeadLineList и createOptionsList
        clearLocationList();  // чистим список для следующего обновления
    }

    // если выбран диапазон времени от дома до метро ОТ 20 - 30 МИНУТ
    if(idRadio.classList.contains('twentyThirty')) {

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro > 20 && time.offer.timeToMetro <= 30 ) {
                locationList.push(time);
            }
        });
        
        dead = createDeadLineList();  //отфильтрованный locationList функцией createDeadLineList добавляем в пустой массив и отправляем его на следующую фильтровку в createOptionsList

        const options = createOptionsList();  //отфильтрованный массив dead

        console.log(options);
        createList(options);  // создаём список после фильтра createDeadLineList и createOptionsList
        clearLocationList();  // чистим список для следующего обновления
    }

     // если выбран диапазон времени от дома до метро БОЛЬШЕ 30 МИНУТ
     if(idRadio.classList.contains('moreThanThirty')) {

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro > 30 ) {
                locationList.push(time);
            }
        });
        
        dead = createDeadLineList();  //отфильтрованный locationList функцией createDeadLineList добавляем в пустой массив и отправляем его на следующую фильтровку в createOptionsList

        const options = createOptionsList();  //отфильтрованный массив dead

        console.log(options);
        createList(options);  // создаём список после фильтра createDeadLineList и createOptionsList
        clearLocationList();  // чистим список для следующего обновления
    }

    // если выбран диапазон времени ЛЮБОЙ
    if(idRadio.classList.contains('any')) {

        arrayCard.forEach(time => {
            if(time.offer.timeToMetro) {
                locationList.push(time);
            }
        });
        
        dead = createDeadLineList();  //отфильтрованный locationList функцией createDeadLineList добавляем в пустой массив и отправляем его на следующую фильтровку в createOptionsList

        const options = createOptionsList();  //отфильтрованный массив dead

        console.log(options);
        createList(options);  // создаём список после фильтра createDeadLineList и createOptionsList
        clearLocationList();  // чистим список для следующего обновления
    }

})

export { locationList };
export { dead };






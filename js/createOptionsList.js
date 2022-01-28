import { dead } from './filter.js';

function createOptionsList() {

    const optionList = Array.from(document.querySelectorAll("input.checkbox__real[type='checkbox']:checked"));

    let finalList = [];   //массив для финального отображения (после всех фильтров) списка объявлений
    
    let optionsChecked = [];   //  массив чекбоксов ДОПОЛНИТЕЛЬНОЙ СЕКЦИИ

    optionList.forEach((option) => {      // формирую массив чекбоксов ДОПОЛНИТЕЛЬНОЙ СЕКЦИИ
        const parent = option.parentNode;
        const childrenParent = parent.querySelector('.checkbox > .checkbox__title').textContent;
        optionsChecked.push(childrenParent);
    })

    console.log(optionsChecked);




    dead.forEach(option => {  // формирую массив finalList(dead получил из filter.js после фильтра БЛИЗОСТЬ К МЕТРО и СРОК СДАЧИ)

        let arrFeaturesJson = option.offer.features;  //  получаю массив опций одного объявления

        console.log(arrFeaturesJson);

        arrFeaturesJson.filter(function(options) {  // фильтрую массив опций(features) одного объявления согласно чекбокса ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ
            
            for(let i = 0; i <= optionsChecked.length; i++) {
                if(optionsChecked.length === 1 && optionsChecked[i] === options) {
                    finalList.push(option);

                } else if (optionsChecked.length > 1) {
                   console.log('Так я не могу(((');
                }
            }  
        });
    })


    return finalList;
}




export { createOptionsList };
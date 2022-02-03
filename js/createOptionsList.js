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

    finalList =  dead.filter((card) =>  {
        // фильтрую общий массив dead, в функции мы получаем одно объявление card

        for (let item in optionsChecked) {
            //выбранные опции в фильтре
            const itemChecked = optionsChecked[item];
            //Опции у текущего объявления
            const features = card.offer.features;
            //ищем в features выбранные опции
            let resultSearch = features.find((i) => i === itemChecked);
            //Если хоть одна не найдена выходим из цикла и возращаем false
            if(!resultSearch) {
                return false;
            }
        }
        //Цикл ни разу не вернул false - значит все опции найдены
        return true;
    });



    console.log(finalList);

    return finalList;
}




export { createOptionsList };

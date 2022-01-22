import { dead } from './filter.js';

function createOptionsList() {

    const optionList = Array.from(document.querySelectorAll("input.checkbox__real[type='checkbox']:checked"));

    let finalList = [];
    
    let optionsChecked = [];

    optionList.forEach((option) => {
        const parent = option.parentNode;
        const childrenParent = parent.querySelector('.checkbox > .checkbox__title').textContent;
        optionsChecked.push(childrenParent);
    })

    dead.forEach(option => {

        let arrFeaturesJson = option.offer.features;
        console.log(arrFeaturesJson);

        for(let i = 0; i <= optionsChecked.length; i++) {
           for(let j = 0; j <= arrFeaturesJson.length; j++) {
               if(optionsChecked[i] === option.offer.features[i]) {
                finalList.push(option);
               }
               if(finalList[i] === finalList[i]) {
                break;
               }
           }
           
        }
        
    })


    return finalList;
}




export { createOptionsList };
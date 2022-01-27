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

    console.log(optionsChecked);





    dead.forEach(option => {

        let arrFeaturesJson = option.offer.features;

        console.log(arrFeaturesJson);

        arrFeaturesJson.filter(function(options) {
            for(let i = 0; i <= optionsChecked.length; i++) {
                if(optionsChecked[i] === options) {
                    finalList.push(option);
                }
                // if(optionsChecked.length > 1 && optionsChecked[i] === options[i]) {
                //     finalList.push(option);
                // }
            } 
             
        });

        
    })


    return finalList;
}




export { createOptionsList };
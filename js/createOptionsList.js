// import { dead } from './filter.js';

function createOptionsList() {
    // const optionList = Array.from(document.querySelectorAll("input[type='checkbox'][name='Option']:checked"));


    const optionList = Array.from(document.querySelectorAll("input.checkbox__real[type='checkbox']:checked"));
    
    // const text = document.querySelector('.checkbox > .checkbox__title').textContent;
    // console.log(text);

    let newArray = [];
    for (let i = 0; i <= optionList.length; i++) {
        newArray = optionList[i].name;
    }
   

    return newArray;
}




export { createOptionsList };
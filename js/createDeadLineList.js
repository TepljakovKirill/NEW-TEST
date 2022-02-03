import { locationList } from './filter.js';

function createDeadLineList() {
    const radio = document.querySelector("input[name='term']:checked");
    const nameRadio = radio.parentElement.querySelector(".radio__title").textContent;

//зачем нам в цикле переписывать массив? Когда можно вернуть текущий
    // if(radio.classList.contains('any')) {
    //     locationList.forEach(deadline => {
    //         if(deadline.offer.deadline) {
    //             arrDeadLine.push(deadline);
    //         }
    //     });
    // }
//Я предлагаю не совсем корректное решение, опираться на название опции не стоит, обычно фильтруют по value радиобатона, который у тебя кстати не задан. ну и писать условие на каждое значение некрасиво, можно короче
    if(nameRadio === "Любой") {
        return locationList;
    } else {
        console.log(locationList.filter((deadline) => deadline.offer.deadline === nameRadio));
        return locationList.filter((deadline) => deadline.offer.deadline === nameRadio)
    }

}

export { createDeadLineList };


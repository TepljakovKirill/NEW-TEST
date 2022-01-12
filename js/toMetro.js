const listButtonTime = Array.from(document.querySelectorAll('.location__checkbox'));

listButtonTime.forEach((elem) => {
    elem.addEventListener('click', (evt) => {
        listButtonTime.forEach((clear) => {
            if(clear.checked) {
                clear.checked = false;
            }
        })
        evt.target.checked = true;
    })
})
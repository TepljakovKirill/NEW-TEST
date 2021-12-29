
let card = document.querySelector('.cards-holder');
let btnMore = document.querySelector('.btn-more');

function createList(arrCard) {
	let key;
	for(key in arrCard) {
		card.innerHTML += `
		<a class="card-link" href="#">
			<div class="card">
				<div class="card__badges">
					<div class="card__badge comfort">Комфорт</div>
					<div class="card__badge credit">Рассрочка 12 мес.</div>
				</div>
				<div class="card__img">
					<img class="card__image" src="img/card.jpg" alt="ЖК Ильинские луга">
				</div>
				<div class="card__content">
					<h4 class="card__title">${arrayCard[key].offer.title}</h4>
					<div class="card__term">${arrayCard[key].offer.deadline}</div>
					<div class="card__metro">${arrayCard[key].offer.metro}</div>
					<div class="card__address">${arrayCard[key].offer.adress}</div>
				</div>
			</div>
		</a>
		`
	}
}

let arrayCard;
let slicedArr;

async function createLoader() {
	let response = await fetch("http://localhost:3000/data");
	arrayCard = await response.json();

	slicedArr = arrayCard.slice (0, 9);
	createList(slicedArr);
}

let counter = 0;

function more() {
	if((slicedArr.length + counter) === 9 + counter) {
		card.innerHTML = "";
		counter += 3;
	} 
	let nextList = arrayCard.slice (0, (9 + counter));
	createList(nextList);
	
	if(nextList.length === arrayCard.length) {
		btnMore.disabled = true;
	}
}

btnMore.addEventListener('click', more);

createLoader();

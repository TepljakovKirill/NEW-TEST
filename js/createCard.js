let totalCards = [];
let card = document.querySelector('.cards-holder');
let btnMore = document.querySelector('.btn-more');

async function createLoader() {
	let response = await fetch("db.json");
	let arrayCard = await response.json();

	totalCards = arrayCard;

	//перебераем весь массив с объектами с помощью map и добавляем в объект свойство addList как флаг
	let sliceTotalCards = totalCards.map(function(addBlock) {
		for(let i = 0; i <= totalCards.length; i++) {
			if(i <= 8) {
				totalCards[i].addList = true;
			}
		}
		return addBlock;
	})

	console.log(sliceTotalCards);
//ты тут прописал двойной цикл map  в мапе еще раз for, то есть по массиву скрипт пробежится 52 раза вместо 1-го
	let finalList = sliceTotalCards.map(function() {
		for(let i = 0; i < sliceTotalCards.length; i++) {
			console.log(sliceTotalCards[i].addList !== undefined) //почему эта строчка и ВЫПОНЯЕТСЯ И ПИШИТ ОШИБКУ????
			// выполняется пока sliceTotalCards[i] не равно undefined, а равно undefined оно из-за неверного условия, равно не нужно
		}
	})


	//Для того что бы обрезать массив достаточно
	const slicedArr = arrayCard.slice (0, 8);

	let key;
	for(key in slicedArr) {
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
	btnMore.addEventListener('click', more);
	function more() {
		alert('ok');
	}
}

createLoader();

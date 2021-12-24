/**
 *
 * @returns {Promise<void>}
 */
const btnMore = document.querySelector(".btn-more")
/* Текущая страница */
let currentPage = 1;
/* количество объявлений на странице */
const countItem = 3;
/* сюда запишем массив полученный с сервера */
let arrayCard = [];

btnMore.addEventListener('click', createLoader);

async function loader() {
	let response = await fetch("http://localhost:3000/data");
	let arrayCard = await response.json();
	return arrayCard;
};

function createLoader(array = []) {
	if(array.length) {
		arrayCard = array;
	}
	let card = document.querySelector('.cards-holder');
	let key = countItem * (currentPage - 1);
	console.log(key);
	for(key; key < arrayCard.length; key++) {
		/* индекс не больше длинны массива, и не больше количества выводимых страниц */
		if(arrayCard.length > countItem * currentPage && key <= countItem * currentPage - 1) {
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
		} else if(arrayCard.length < countItem * currentPage ) {
			alert("конец")
			document.querySelector(".btn-more").disabled = true;
			return;
		} else if(key > countItem * currentPage - 1) {
			currentPage++;
			return currentPage;
		}
	}
}
function showError () {}

loader()
	.then(
		result => createLoader(result),
		error => showError(error)
		);

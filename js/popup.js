const card = document.querySelector("#card").content;
const popup = card.querySelector(".card__wrap");

const createCard = (adv) => {
	const fragment = document.createDocumentFragment();
	const currentPopup = popup.cloneNode(true);

	// if(adv.house.image) {
	//   let image = currentPopup.querySelector('.card__image');
	// 	image = adv.house.image;
	// } else {
	//   currentPopup.querySelector('.card__image').classList.add('hide');
	// }

	// if(adv.offer.title) {
	//   currentPopup.querySelector('.card__title').textContent = adv.offer.title;
	// } else {
	//   currentPopup.querySelector('.card__title').classList.add('hide');
	// }

	// if(adv.offer.deadline) {
	//   currentPopup.querySelector('.card__term').textContent = adv.offer.deadline;
	// } else {
	//   currentPopup.querySelector('.card__term').classList.add('hide');
	// }

	// if(adv.offer.metro) {
	//   currentPopup.querySelector('.card__metro').textContent = adv.offer.metro;
	// } else {
	//   currentPopup.querySelector('.card__metro').classList.add('hide');
	// }

	// if(adv.offer.adress) {
	//   currentPopup.querySelector('.card__address').textContent = adv.offer.adress;
	// } else {
	//   currentPopup.querySelector('.card__address').classList.add('hide');
	// }

	const total = fragment.appendChild(currentPopup);
	return total;
	// return currentPopup;
};

export { createCard };

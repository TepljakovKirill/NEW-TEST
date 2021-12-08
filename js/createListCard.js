import { createLoader } from "./load-home.js";
import { createCard } from "./popup.js";

let cardsHolder = document.querySelector(".cards-holder");

const getOffers = () => {
	const room = createCard();
	cardsHolder.appendChild(room);
};

createLoader(getOffers);

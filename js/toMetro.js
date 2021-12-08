const btnLocation = document.querySelector("#location-05");
const locationCheckbox = document.querySelectorAll(".location__checkbox");

function deliteChecked() {
	locationCheckbox.forEach(function (onChecked) {
		if (btnLocation.checked) {
			onChecked.checked = false;
		}
	});
}

btnLocation.addEventListener("click", deliteChecked);

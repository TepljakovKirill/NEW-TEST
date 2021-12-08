const location = document.querySelectorAll(".location__checkbox");
const radio = document.querySelectorAll(".radio__real");
const checkbox = document.querySelectorAll(".checkbox__real");
const toggle = document.querySelector(".toggle__real");
const btnSubmit = document.querySelector(".btn-reset");

btnSubmit.addEventListener("click", function (evt) {
	evt.preventDefault();
	location.forEach(function (check) {
		if (check.checked) {
			check.checked = false;
		}
	});
	radio.forEach(function (real) {
		if (real.checked) {
			real.checked = false;
			radio[0].checked = true;
		}
	});
	checkbox.forEach(function (boxReal) {
		if (boxReal.checked) {
			boxReal.checked = false;
		}
	});
	if (toggle.checked) {
		toggle.checked = false;
	}
});

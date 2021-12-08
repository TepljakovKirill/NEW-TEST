const widgets = document.querySelectorAll(".widget");
const widgetShow = document.querySelector(".widget-show-hidden");
const checkbox = document.querySelectorAll(".checkbox");
const widgetHidden = document.querySelectorAll(".widget-hidden");

// скрытие виджетов

widgets.forEach(function (widget) {
	widget.addEventListener("click", (evt) => {
		if (evt.target.classList.contains("widget__title")) {
			evt.target.classList.toggle("widget__title--active");
			evt.target.nextElementSibling.classList.toggle("widget__body--hidden");
		}
	});
});

// событие кнопки ПОКАЗАТЬ ЕЩЁ

function deliteClass(evt) {
	evt.preventDefault();
	widgetHidden.forEach(function (hidden) {
		hidden.classList.toggle("widget-hidden");
		if (!hidden.classList.contains("widget-hidden")) {
			widgetShow.textContent = "Скрыть";
		}
		if (hidden.classList.contains("widget-hidden")) {
			widgetShow.textContent = "Показать ещё";
		}
	});
}

widgetShow.addEventListener("click", deliteClass);

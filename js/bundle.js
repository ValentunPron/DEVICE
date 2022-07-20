/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/module/catalog.js":
/*!******************************!*\
  !*** ./js/module/catalog.js ***!
  \******************************/
/***/ ((module) => {

function catalog() {
	const headerList = document.querySelectorAll('.header__list'),
	catalogList = document.querySelector('.header__catalog'),
	catalogMenu = document.querySelector('.catalog__menu '),
	catalogLink = catalogList.querySelector('.catalog__link');
	function showBlock(item) {
		item.classList.remove('none');
		item.classList.add('active');
	}

	function hideBlock(item) {
		item.classList.remove('active');
		item.classList.add('none');
	}
	catalogLink.addEventListener('click', (e) => {
		e.preventDefault();
		if (catalogMenu.classList[1] == 'none') {
			showBlock(catalogMenu);
		} else {
			hideBlock(catalogMenu);
		}
	})
}

module.exports = catalog;

/***/ }),

/***/ "./js/module/form.js":
/*!***************************!*\
  !*** ./js/module/form.js ***!
  \***************************/
/***/ ((module) => {

function form() {
	const form = document.querySelectorAll('form');

	form.forEach(item => {
		formData(item);
	})
	function formData(form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const request = new XMLHttpRequest();
			request.open('POST', 'js/server.php');

			const formData = new FormData(form);

			const object = {};
			formData.forEach(function(value, key) {
				object[key] = value;
			});

			const json = JSON.stringify(object);

			request.send(json);
			request.addEventListener('load', () => {
				if(request.status === 200) {
					console.log('complete');
					console.log(json);
					setTimeout(() => {
						form.reset();
					}, 2000);
				} else {
					console.log('eror404');
				}
			});
		})
	}
}

module.exports = form;

/***/ }),

/***/ "./js/module/list.js":
/*!***************************!*\
  !*** ./js/module/list.js ***!
  \***************************/
/***/ ((module) => {

function list() {
	class listMenu {
		constructor(href, src, alt, title, parentSelector) {
			this.href = href;
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.parent = document.querySelector(parentSelector);

		}

		addItemList() {
			const element = document.createElement('li');
			element.classList.add('filter__type');
			element.innerHTML = `
			<a class="filter__link" href="${this.href}">
				<div class="filter__imgBlock">
					<img src="${this.src}" alt="${this.alt}" class="filter__img">
				</div>
				<span class="filter__title">${this.title}</span>
			</a>`;
			this.parent.append(element);
		}
	}

	new listMenu(
		'#',
		'img/filter/01.png',
		'Виртуальна реальность',
		'Виртуальная реальность',
		'.filter .filter__list'
	).addItemList();
	new listMenu(
		'#',
		'img/filter/02.png',
		'Модули для селфи',
		'Моноподы для селфи',
		'.filter .filter__list'
	).addItemList();
	new listMenu(
		'#',
		'img/filter/03.png',
		'Экшн-камера',
		'Экшн-камеры',
		'.filter .filter__list'
	).addItemList();
	new listMenu(
		'#',
		'img/filter/04.png',
		'Фитнес-браслет',
		'Фитнес-браслеты',
		'.filter .filter__list'
	).addItemList();
	new listMenu(
		'#',
		'img/filter/05.png',
		'Часы',
		'Умные часы',
		'.filter .filter__list'
	).addItemList();
	new listMenu(
		'#',
		'img/filter/06.png',
		'Квадрокоптеры"',
		'Квадрокоптеры',
		'.filter .filter__list'
	).addItemList();
}

module.exports = list;

/***/ }),

/***/ "./js/module/maps.js":
/*!***************************!*\
  !*** ./js/module/maps.js ***!
  \***************************/
/***/ ((module) => {

function maps() {
	const mapButton = document.querySelectorAll('.map__button'),
		  mapBig = document.querySelector('.connection__bigMap');

	function activeMap() {
		if(mapBig.classList[1] == 'none') {
			mapBig.classList.remove('none');
			mapBig.classList.add('active');
		}
		else {
			mapBig.classList.remove('active');
			mapBig.classList.add('none');
		}
	}
	
	mapButton.forEach(i => {
		i.addEventListener('click', event => {
			event.preventDefault();
			activeMap();
		})
	})
}

module.exports = maps;

/***/ }),

/***/ "./js/module/slide.js":
/*!****************************!*\
  !*** ./js/module/slide.js ***!
  \****************************/
/***/ ((module) => {

function slide() {
	const slideMenu = document.querySelectorAll('.slides section'),
	slideButton = document.querySelectorAll('.description__number');
	slideButton.forEach((i, num) => i.addEventListener('click', (e) => {
		hideSlideContent();
		showSlideContent(slideNumber(num), i);
		console.log('sdsd')
	}))

	function slideNumber(number) {
	if(number == 0 || number == 3 || number == 6) {
		return number = 0;
	} else if(number == 1 || number == 4 || number == 7) {
		return number = 1;
	} else if(number == 2 || number == 5 || number == 8){
		return number = 2;
	}
	}

	function hideSlideContent() {
	slideButton.forEach(temp => {
		temp.classList.remove('description__active');
		console.log('sdds');
	})
	}
	function showSlideContent(i = 0, item) {
	slideMenu.forEach(temp => temp.classList.add('none'))
	slideMenu[i].classList.remove('none');
	console.log('sdds');
	item.classList.add('description__active');
	}
}

module.exports = slide;

/***/ }),

/***/ "./js/module/tabs.js":
/*!***************************!*\
  !*** ./js/module/tabs.js ***!
  \***************************/
/***/ ((module) => {

function tabs() {
	const tabsParrent = document.querySelector('.info .container'),
	tabs = tabsParrent.querySelectorAll('.info__row'),
	tabsButton = document.querySelectorAll('.info__buttons .info_button');
	function hideTabsContent() {
		tabs.forEach((item) => {
			item.classList.add('none');
	})
	}

	function slideNumber(number) {
		if(number == 0 || number == 3 || number == 6) {
			return number = 0;
		} else if(number == 1 || number == 4 || number == 7) {
			return number = 1;
		} else if(number == 2 || number == 5 || number == 8){
			return number = 2;
		}
	}
	
	function showTabsContent(i = 0) {
		tabs[i].classList.remove('none')
	}

	hideTabsContent();
	showTabsContent();

	tabsButton.forEach((item, i) => {
	item.addEventListener('click', event => {
		hideTabsContent();
		showTabsContent(slideNumber(i));
		})
	})
}

module.exports = tabs;

/***/ }),

/***/ "./js/module/window.js":
/*!*****************************!*\
  !*** ./js/module/window.js ***!
  \*****************************/
/***/ ((module) => {

function window() {
	const writeWindow = document.querySelector('.write_us'),
		  writeOpen = document.querySelector('.write_us__button'),
		  writeExit = document.querySelector('.write_us__exit');

	function openWindow() {
		writeWindow.classList.remove('none');
	}

	function closeWindow() {
		writeWindow.classList.add('none');
	}
	
	writeOpen.addEventListener('click', (event) => {
		openWindow();
		writeExit.addEventListener('click', closeWindow);

		document.addEventListener('keydown', (e) => {
			if (e.code === 'Escape' && writeExit.style.display != 'none') {
				closeWindow();
			}
		});

		writeWindow.addEventListener('click', (event) => {
			if (event.target === writeWindow ) {
				closeWindow();
			}
		});
	})
}

module.exports = window;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', () => {
	const catalog = __webpack_require__(/*! ./module/catalog */ "./js/module/catalog.js"),
		  form  = __webpack_require__(/*! ./module/form */ "./js/module/form.js"),
		  list = __webpack_require__(/*! ./module/list */ "./js/module/list.js"),
		  maps = __webpack_require__(/*! ./module/maps */ "./js/module/maps.js"),
		  slide = __webpack_require__(/*! ./module/slide */ "./js/module/slide.js"),
		  tabs = __webpack_require__(/*! ./module/tabs */ "./js/module/tabs.js"),
		  window = __webpack_require__(/*! ./module/window */ "./js/module/window.js");

	catalog();
	form();
	list();
	maps();
	slide();
	tabs();
	window();
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
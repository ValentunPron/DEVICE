window.addEventListener('DOMContentLoaded', () => {
	const headerList = document.querySelectorAll('.header__list'),
		catalogList = document.querySelector('.header__catalog'),
		catalogMenu = document.querySelector('.catalog__menu '),
		catalogLink = catalogList.querySelector('.catalog__link'),
		slideMenu = document.querySelectorAll('.slides section'),
		slideButton = document.querySelectorAll('.description__number'),
		tabsParrent = document.querySelector('.info .container'),
		tabs = tabsParrent.querySelectorAll('.info__row'),
		tabsButton = document.querySelectorAll('.info__buttons .info_button');


	// tabs

	function hideTabsContent() {
		tabs.forEach((item) => {
			item.classList.add('none');
		})
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
	// slide

	slideButton.forEach((i, num) => i.addEventListener('click', (e) => {
		hideSlideContent();
		showSlideContent(slideNumber(num), i);
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
		})
	}
	function showSlideContent(i = 0, item) {
		slideMenu.forEach(temp => temp.classList.add('none'))
		slideMenu[i].classList.remove('none');
		item.classList.add('description__active');
	}
	//catalogButton
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

	// List 

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
})
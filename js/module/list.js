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
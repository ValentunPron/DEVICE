window.addEventListener('DOMContentLoaded', () => {
	const headerList = document.querySelectorAll('.header__list'),
		catalogList = document.querySelector('.header__catalog'),
		catalogMenu = document.querySelector('.catalog__menu '),
		catalogLink = catalogList.querySelector('.catalog__link'),
		slideMenu = document.querySelectorAll('.slides section'),
		slideButton = document.querySelectorAll('.description__number');

	slideButton.forEach((i, num) => i.addEventListener('click', (e) => {
		slideButton.forEach(temp => {
			temp.classList.remove('description__active');
		})
		i.classList.add('description__active');
		console.log(num);
		showSlideContent(slideNumber(num))
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
	function showSlideContent(i = 0) {
		slideMenu.forEach(temp => temp.classList.add('none'))
		slideMenu[i].classList.remove('none');
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
})
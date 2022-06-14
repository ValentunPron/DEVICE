window.addEventListener('DOMContentLoaded', () => {
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
		if(catalogMenu.classList[1] == 'none') {
			console.log(catalogMenu.classList[1])
			showBlock(catalogMenu);
		} else {
			hideBlock(catalogMenu);
		}
	})
})

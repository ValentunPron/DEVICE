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
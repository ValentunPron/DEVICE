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
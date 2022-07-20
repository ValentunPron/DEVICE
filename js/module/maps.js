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
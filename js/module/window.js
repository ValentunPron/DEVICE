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
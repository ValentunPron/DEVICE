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
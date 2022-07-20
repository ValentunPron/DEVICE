window.addEventListener('DOMContentLoaded', () => {
	const catalog = require('./module/catalog'),
		  form  = require('./module/form'),
		  list = require('./module/list'),
		  maps = require('./module/maps'),
		  slide = require('./module/slide'),
		  tabs = require('./module/tabs'),
		  window = require('./module/window');

	catalog();
	form();
	list();
	maps();
	slide();
	tabs();
	window();
})

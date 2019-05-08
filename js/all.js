$(document).ready(function() {
	$('.menu-mobile').on('click', function(event) {
		event.preventDefault();
		$('body').toggleClass('menu-show');
	});
});
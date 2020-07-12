$(document).ready(function() {
	$(".slider").slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

	$(".open-menu").on("click", function() {
		$(".menu").addClass("menu-active");
	});

	$(".close-menu").on("click", function() {
		$(".menu").removeClass("menu-active");
	});
});
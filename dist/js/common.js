$(document).ready(function() {
	// топ телефон//
 	$(".top-phone__button").click(function () {
 		$(".top__phone").slideToggle();
 	});

 	// Гамбургер меню
 	 	// топ телефон//
 	$(".header__menu-button").click(function () {
 		$(".header__menu").slideToggle();
 	});

 	// Фиксированная шапка при скроле
 	$("#header").removeClass("default");
 	$(window).scroll (function () {
 		if ($(this).scrollTop() > 50) {
 			$("#header").addClass("default").fadeIn("fast");
 		} else {
 			$("#header").removeClass("default").fadeIn('fast');
 		};
 	});


	// слайдер (карусель) //

 	$(".header-slider").owlCarousel ({
 		items: 1,	
 		mouseDrag: true, // перетаскивания мышкой;
 		dots: false, // точки в качествке навигации;
 		nav: false,  // Кнопки;
 		loop: true, // Бесконечный цикл;
 		autoplayTimeout: 1000, //скорость смены картинок;
 		margin: 15, //Отступы между слайдерами;
 		autoHeight: true,
 		center:	true,
 		smartSpeed: 700,
 	});

 	// карусель портфолио //
 	 	$(".portfolio-slider").owlCarousel ({
 		items: 4,	
 		mouseDrag: true, // перетаскивания мышкой;
 		nav: true,  // Кнопки;
 		loop: true, // Бесконечный цикл;
 		autoplayTimeout: 1000, //скорость смены картинок;
 		margin: 10, //Отступ между слайдерами;
 		autoHeight: true,
 		smartSpeed: 700,
 		navText: ['<i class="fa fa-angle-double-left"></i', '<i class="fa fa-angle-double-right"></i>'],
 		responsiveClass: true,
 		responsive: {
 			0: {
 				items: 1
 			},
 			800: {
 				items: 2
 			},
 			1100: {
 				items: 4
 			}
 		}
 	 });

 	 // Выбор категорий в каруселе //
 	 	$('.portfolio-buttons button').click(function () {
 	 		var get_id = this.id;
 	 		var get_current = $('.portfolio-slider .' + get_id);

 	 		$('.post').not(get_current).hide(700);
 	 		get_current.show(700);
 	 	});

 	 	$('#showall').click(function () {
 	 		$('.post').show(700); 
  	 	});

 	 // wow анимация при скролле страинцы //
 	 	new WOW().init();
});	
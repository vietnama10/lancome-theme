jQuery(document).ready(function($){
	
	"use strict";
	
	// Navigation
	$('.navbar-nav li').hover(function(){
		$(this).addClass('open');
	},
	function(){
		$(this).removeClass('open');
	});
	
	// Slider
	$(".slider-container .slider-content").slick({
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 1000,
	});

	// Tab Product
	$(".tabproduct-container .slick-container").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});
	$(".tabproduct-container .nav-tabs li a").on("click", function(){
		var tab_content = $(this).attr("href");
		console.log(tab_content);
		$(tab_content+" .slick-container").slick('refresh');
	});
});

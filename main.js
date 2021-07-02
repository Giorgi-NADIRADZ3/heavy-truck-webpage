const swiper = new Swiper('.swiper-container', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
	  delay: 3000,
	  disableOnInteraction: false,
	},
	
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	
	
  });


  
	$('.counter').counterUp({
		delay: 10,
		time: 300,
		coting: 1
	});


	AOS.init();

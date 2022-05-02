const names = ['North Shore', 'South Shore', 'West Shore ', 'East Shore']

const swiper = new Swiper('.main-screen-slider', {
	direction: 'horizontal',
	loop: true,
	speed: 800,
	effect: "fade",
	pagination: {
	  el: '.main-screen-slider__pagination',
	  clickable: true,
	//   type: 'custom',
	//   bulletElement: 'div',
	//   bulletClass: 'pagination-item',
	  renderBullet:
	  
	  function (index, className) {
		return `<div class="pagination__item pagination-item ${className}">` +
					'<span class="pagination-item__line"></span>' +
					'<div class="pagination-item__content">' +
						'<div class="pagination-item__number">0'+ (index + 1) +'</div>' +
						'<div class="pagination-item__text text2">'+ names[index] +'</div>' +
					'</div>' +
				'</div>'
	}
	},
	navigation: {
	  nextEl: '.main-screen-slider__button-next',
	  prevEl: '.main-screen-slider__button-prev',
	},
  });
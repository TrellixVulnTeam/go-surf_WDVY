const names = ['North Shore', 'South Shore', 'West Shore ', 'East Shore']

let swiper = new Swiper(".main-screen-slider", {
	effect: "fade",
	speed: 800,
	loop: true,
	navigation: {
		nextEl: ".main-screen-slider__button-next",
		prevEl: ".main-screen-slider__button-prev",
	},
	pagination: {
		el: ".main-screen-slider__pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return `<div class="pagination__item pagination-item ${className}">
						<div class="pagination-item__number">0${index + 1}</div>
						<div class="pagination-item__text text2">${names[index]}</div>
					</div>`
		}
	},
});

let swiper2 = new Swiper(".surf-swiper", {
	loop: true,
	slidesPerView: 'auto',
	initialSlide: 1,
	speed: 800,
});

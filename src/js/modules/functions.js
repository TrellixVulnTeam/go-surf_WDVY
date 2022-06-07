export function isWebp() {
	function textWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function() {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	textWebP(function(support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	})
}

export function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = `url(${ibg[i].querySelector('img').getAttribute('src')})`;
        }
    }
}

export function toggleClassActive() {
	const infoBlockElements = document.querySelectorAll('.surfboard-info-block');
	const slides = document.querySelectorAll('.shop-swiper__slide')
	if (infoBlockElements) {
		for (let i = 0; i < infoBlockElements.length; i++) {
			infoBlockElements[i].addEventListener('click', () => {
				const arr = Array.prototype.slice.call(infoBlockElements[i].closest('.shop-swiper__slide').querySelectorAll('.surfboard-info-block'))
				const iconIndex = arr.indexOf(infoBlockElements[i]);
				const slideIndex = infoBlockElements[i].closest('.shop-swiper__slide').getAttribute('data-swiper-slide-index');
				slides.forEach((slide) => {
					if (slide.getAttribute('data-swiper-slide-index') === slideIndex) {
						slide.querySelectorAll('.surfboard-info-block')[iconIndex].classList.toggle('active');
					};
				})
			})
		}
	}
}

export function setTime() {
	const today = new Date();
	const monthYear = document.querySelector('.time__month-year');
	const day = document.querySelector('.time__day');
	if (monthYear && day) {
		monthYear.innerHTML = `${today.getMonth() + 1} | ${today.getFullYear()}`
		day.innerHTML = `${today.getDate()}`
	}
}

export function setIndent() {
	const img = document.querySelector('.surf__location-bg');
	const width = img.firstChild.nextSibling.getAttribute("width");	
	if (img && width) {
		img.style.right = `${-(width / 2)}px`;
	}
}

export function resizeInput() {
	const hideElements = document.querySelectorAll('.hide');
	const txtElements = document.querySelectorAll('.txt');
	resize();
	txtElements.forEach(txt => {
		txt.addEventListener("input", resize());
	})

	function resize() {
		for (let i = 0; i <= hideElements.length - 1; i++) {
			for (let j = 0; j <= txtElements.length - 1; j++) {
				hideElements[i].textContent = txtElements[j].value;
				txtElements[j].style.width = hideElements[i].offsetWidth + 15 + "px";
			}		
		}
	}
}
// добавить авторесайз после изменения value

export function counter() {
	const slides = document.querySelectorAll('.sleep .section-swiper__slide');

	document.body.addEventListener('click', (event) => {
		if (event.target.closest('.info-item__plus')) {
			const arr = Array.prototype.slice.call(event.target.closest('.sleep .section-swiper__slide').querySelectorAll('.info-item__plus'));
			const iconIndex = arr.indexOf(event.target.closest('.info-item__plus'));
			const slideIndex = event.target.closest('.sleep .section-swiper__slide').getAttribute('data-swiper-slide-index');
			slides.forEach((slide) => {
				if (slide.getAttribute('data-swiper-slide-index') === slideIndex) {
					increaseCounter(slide, iconIndex);
					updatePrice(slide);
					resizeInput();
				};
			})
		} else if (event.target.closest('.info-item__minus')) {
			const arr = Array.prototype.slice.call(event.target.closest('.sleep .section-swiper__slide').querySelectorAll('.info-item__minus'));
			const iconIndex = arr.indexOf(event.target.closest('.info-item__minus'));
			const slideIndex = event.target.closest('.sleep .section-swiper__slide').getAttribute('data-swiper-slide-index');
			slides.forEach((slide) => {
				if (slide.getAttribute('data-swiper-slide-index') === slideIndex) {
					decreaseCounter(slide, iconIndex);
					updatePrice(slide);
					resizeInput();
				};
			})
		}
		
	})
	
}

function updatePrice(slide) {
	const usd = slide.querySelector('.sleep .info-item__price');
	const dataGuest = slide.querySelector('.price').dataset.guest;
	const dataNight = slide.querySelector('.price').dataset.night;
	const nightValue = slide.querySelector('.night').value;
	const guestValue = slide.querySelector('.guest').value;

	const summ = nightValue * dataNight + (guestValue - 1) * dataGuest;
	// input.value = `$${summ} USD`;
	usd.innerHTML = `$${summ} USD`;
}

export function defaultPrice() {
	const slides = document.querySelectorAll('.sleep .section-swiper__slide');
	slides.forEach((slide) => {
		updatePrice(slide);
	})
}

function increaseCounter(slide, index) {
	const value = slide.querySelectorAll('.txt')[index].value;
	const max = slide.querySelectorAll('.txt')[index].max;
	value < max ? slide.querySelectorAll('.txt')[index].value++ : false;
}

function decreaseCounter(slide, index) {
	const value = slide.querySelectorAll('.txt')[index].value;
	const min = slide.querySelectorAll('.txt')[index].min;
	min < value ? slide.querySelectorAll('.txt')[index].value-- : false;
}

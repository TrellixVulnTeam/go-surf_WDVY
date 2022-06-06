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


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
	navigation: {
		nextEl: ".surf-swiper__button-next",
		prevEl: ".surf-swiper__button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	}
});


const beaches = [ 
			'<path class="line line-animation2" d="M729.5 89.5C706.813 117.021 678.335 129.097 664.4 132.399C662.477 132.855 660.571 133.359 658.728 134.071L649.476 137.646C643.464 139.968 639.5 145.75 639.5 152.195V152.195C639.5 156.824 641.556 161.213 645.112 164.177L651.5 169.5L655.854 173.184C661.225 177.729 663.848 184.74 662.778 191.694V191.694C661.96 197.011 659.057 201.783 654.712 204.953L648.145 209.746C644.737 212.233 640.955 214.162 636.94 215.461L634.978 216.095C629.088 218.001 623.755 221.382 619.508 225.886V225.886C613.099 232.683 609.5 241.703 609.5 251.045V251.045C609.5 256.929 610.917 262.725 613.631 267.945L661.5 360" stroke="white" stroke-width="2"/>', 
			'<path class="line line-animation3" d="M729.114 83.9394C720.546 107.321 740.614 115.526 756.675 130.807C761.434 135.336 761.888 142.817 756.879 147.342C746.107 157.074 705.264 142.917 707.854 155.745C710.53 168.994 745.061 187.531 746.618 188.799C760.284 199.932 764.735 228.174 757.208 243.658C751.852 254.676 716.342 250.962 705.172 247.293C632.024 223.266 664.985 226.131 582.817 218.67C576.527 218.099 569.935 217.806 563.894 219.65C557.671 221.549 557.869 229.339 559.957 233.55C566.876 247.506 597.849 271.178 589.514 289.523C586.956 295.152 580.963 298.707 578.264 304.27C576.151 308.627 576.385 313.772 575.445 318.523" stroke="white" stroke-width="2"/>', 
			'<path class="line line-animation4" d="M729.5 87C750.743 130.619 742.988 172.968 730.378 201.726C722.381 219.964 718.83 240.955 726.568 259.304L744.757 302.438C747.557 309.079 749 316.213 749 323.42V336V337.914C749 352.659 742.97 366.763 732.31 376.951L724.007 384.887C705.623 402.458 701.989 430.474 715.283 452.154L725 468" stroke="white" stroke-width="2"/>',
			'<path class="line line-animation1" d="M730 84L718.529 97.0157C709.214 107.585 696.137 114.095 682.09 115.157L654.603 117.236C647.966 117.738 641.307 116.625 635.194 113.993V113.993C619.188 107.102 600.576 111.022 588.709 123.784L579.32 133.882C565.612 148.625 543.058 151.078 526.387 139.793V139.793C524.146 138.276 522.053 136.519 520.174 134.572V134.572C506.196 120.085 483.482 118.636 467.776 131.229L453.698 142.517C444.795 149.655 438.383 159.43 435.38 170.439L431.407 185.008C430.142 189.647 428.239 194.088 425.754 198.205V198.205C417.97 211.097 404.98 219.982 390.143 222.562L383.592 223.701C380.536 224.233 377.441 224.5 374.339 224.5H365" stroke="white" stroke-width="2"/>',	
]

const beachNames = []
const beachCoords = []


document.querySelector('.header__map').firstChild.nextSibling.insertAdjacentHTML('afterbegin', beaches[3])		

swiper.on('slideChange', function() {
	const map = document.querySelector('.header__map')
	const line = document.querySelector('.line')
	
	if (map) {
		if (line) {
			line.remove()
		}
		map.firstChild.nextSibling.insertAdjacentHTML('afterbegin', beaches[swiper.activeIndex - 2])
		console.log(swiper.activeIndex - 2);
	}
	
})
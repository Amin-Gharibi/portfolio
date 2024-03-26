const toggleMobileHeaderMenu = () => {
	const toggleBtn = document.querySelector('.hamburger-menu-icon > svg')
	const mobileMenu = document.querySelector('.header--menu__mobile')

	toggleBtn.addEventListener('click', () => {
		mobileMenu.classList.toggle('active')
	})
}

const initInfiniteSwiper = (containerSelector, toLorR) => {
	const speed = 2 // 2 pixels per frame at 60 frames per second
	const banner = document.querySelector(containerSelector)
	// build images array
	let images = [...banner.getElementsByTagName('img')]

	// initialize images positions
	let rects = images.map((img, index) => {
		const style = getComputedStyle(img)
		let rect = {
			top: 0,
			width: 144,
			height: parseInt(style.height, 10)
		}
		rect[toLorR] = index * (144 + 50)
		return rect
	});

	function animate() {
		const l = images.length;
		for (let i = 0; i < l; i++) {
			const img = images[i];
			const rect = rects[i];
			rect[toLorR] -= speed;
			if (rect[toLorR] + rect.width < 0) {
				// this image if fully overflowing {toLorR}, put it at the end of the image list both in position and in images and rects
				const lastRect = rects[rects.length - 1];
				rect[toLorR] = lastRect[toLorR] + lastRect.width + 50;
				images = images.slice(1, l);
				images.push(img);
				rects = rects.slice(1, l);
				rects.push(rect);
				i--;
			}
			// change the actual image style according to new rect value
			img.style[toLorR] = rect[toLorR] + 'px';
		}
		requestAnimationFrame(animate);
	}

	animate()
}


export {
	toggleMobileHeaderMenu,
	initInfiniteSwiper
}
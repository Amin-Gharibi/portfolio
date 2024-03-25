const toggleMobileHeaderMenu = () => {
	const toggleBtn = document.querySelector('.hamburger-menu-icon > svg')
	const mobileMenu = document.querySelector('.header--menu__mobile')

	toggleBtn.addEventListener('click', () => {
		mobileMenu.classList.toggle('invisible')
		mobileMenu.classList.toggle('opacity-0')
		mobileMenu.classList.toggle('max-h-0')
		mobileMenu.classList.toggle('max-w-0')
	})
}


export {
	toggleMobileHeaderMenu
}
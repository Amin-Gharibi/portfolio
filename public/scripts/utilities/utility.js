const toggleMobileHeaderMenu = () => {
	const toggleBtn = document.querySelector('.hamburger-menu-icon > svg')
	const mobileMenu = document.querySelector('.header--menu__mobile')

	toggleBtn.addEventListener('click', () => {
		mobileMenu.classList.toggle('active')
	})
}


export {
	toggleMobileHeaderMenu
}
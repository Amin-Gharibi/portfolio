import {initInfiniteSwiper, toggleMobileHeaderMenu} from "./utilities/utility.js";

const changeThemeHandler = () => {
	const themeToggleIcons = document.querySelectorAll('.toggle-theme use')
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		themeToggleIcons.forEach(icon => {
			icon.setAttribute('href', '#sun-icon')
		})
	} else {
		themeToggleIcons.forEach(icon => {
			icon.setAttribute('href', '#moon-icon')
		})
	}
}

changeThemeHandler()

const themeToggleBtns = document.querySelectorAll('.toggle-theme')
themeToggleBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		console.log(localStorage.theme)
		if (localStorage.theme === 'dark') {
			localStorage.theme = 'light'
		} else {
			localStorage.theme = 'dark'
		}
		changeThemeHandler()
	})
})

toggleMobileHeaderMenu()

initInfiniteSwiper('.tech-stack--infinite-swiper', 'left')
initInfiniteSwiper('.tech-stack--infinite-swiper__reverse', 'right')
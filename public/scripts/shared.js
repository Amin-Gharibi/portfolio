import {toggleMobileHeaderMenu} from "./utilities/utility.js";

const changeThemeHandler = () => {
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		localStorage.setItem('theme', 'light')
		document.documentElement.classList.remove('dark')
	} else {
		localStorage.setItem('theme', 'dark')
		document.documentElement.classList.add('dark')
	}
}

const themeToggleBtns = document.querySelectorAll('.toggle-theme')
themeToggleBtns.forEach(btn => {
	btn.addEventListener('click', changeThemeHandler)
})

toggleMobileHeaderMenu()
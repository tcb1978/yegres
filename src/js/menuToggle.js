export class MenuToggle {

	toggleMenu() {

		const nav = document.querySelector('.nav');
		const menu = document.querySelector('.button');

		const toggle = () => {
			nav.classList.toggle('flex-nav');
			menu.classList.toggle('change');
		}

		nav.addEventListener('click', toggle);
	}
}
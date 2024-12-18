const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if(!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		hiddenBar.classList.remove('open');
		menuOpen = false;
	}
});

const crossBtn = document.querySelector(".cross-btn-hidden");
const hiddenBar = document.querySelector(".hidden-dropdown");
crossBtn.addEventListener('click', () => {
		hiddenBar.classList.remove('open');
		crossOpen = true;
}); 

const about = document.querySelector(".dropdown");
about.addEventListener('click', () => {
		hiddenBar.classList.add('open');
}); 


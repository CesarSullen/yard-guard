// NAVIGATION
const navbar = document.getElementById("navbar");
const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.getElementById("nav-menu");

window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});

burgerBtn.addEventListener("click", () => {
	burgerBtn.classList.toggle("open");
	navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
	link.addEventListener("click", () => {
		burgerBtn.classList.remove("open");
		navMenu.classList.remove("active");
	});
});

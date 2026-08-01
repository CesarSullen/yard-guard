// NAVIGATION
const navbar = document.getElementById("navbar");
const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.getElementById("nav-menu");

window.addEventListener(
	"scroll",
	() => {
		if (window.scrollY > 100) {
			navbar.classList.add("scrolled");
		} else {
			navbar.classList.remove("scrolled");
		}
	},
	{ passive: true },
);

function openMenu() {
	burgerBtn.classList.add("open");
	navMenu.classList.add("active");
	burgerBtn.setAttribute("aria-expanded", "true");
}

function closeMenu() {
	burgerBtn.classList.remove("open");
	navMenu.classList.remove("active");
	burgerBtn.setAttribute("aria-expanded", "false");
}

burgerBtn.addEventListener("click", () => {
	const isOpen = navMenu.classList.contains("active");
	isOpen ? closeMenu() : openMenu();
});

document.querySelectorAll(".nav-link").forEach((link) => {
	link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && navMenu.classList.contains("active")) {
		closeMenu();
		burgerBtn.focus();
	}
});

document.addEventListener("click", (event) => {
	const clickedInsideMenu = navMenu.contains(event.target);
	const clickedBurger = burgerBtn.contains(event.target);
	if (
		navMenu.classList.contains("active") &&
		!clickedInsideMenu &&
		!clickedBurger
	) {
		closeMenu();
	}
});

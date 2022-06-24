// navbar toggler
const navToggler = document.querySelector(".nav-toggler");
const Nav = document.querySelector(".nav");
const Header = document.querySelector(".header");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
	navToggler.classList.toggle("active");
	Nav.classList.toggle("open");
}

// close nav when clicking on a nav item
document.addEventListener("click", function (e) {
	if (e.target.closest(".nav-item")) {
		toggleNav();
	}
});

// sticky header
window.addEventListener("scroll", function () {
	if (this.pageYOffset > 60) {
		Header.classList.add("sticky");
	} else {
		Header.classList.remove("sticky");
	}
});

// menu tabs
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function (e) {
	if (
		e.target.classList.contains("menu-tab-item") &&
		!e.target.classList.contains("active")
	) {
		const target = e.target.getAttribute("data-target");
		menuTabs.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		const menuSection = document.querySelector(".menu-section");
		menuSection
			.querySelector(".menu-tab-content.active")
			.classList.remove("active");
		menuSection.querySelector(target).classList.add("active");
	}
});

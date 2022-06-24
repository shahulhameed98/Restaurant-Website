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

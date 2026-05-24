document.addEventListener("DOMContentLoaded", () => {
	const body = document.body;
	const menuToggle = document.querySelector(".site-menu-toggle");
	const primaryNav = document.querySelector("#site-primary-nav");

	if (body) {
		body.classList.remove("is-preload");
	}

	if (menuToggle && primaryNav) {
		menuToggle.addEventListener("click", () => {
			const isOpen = body.classList.toggle("menu-open");
			menuToggle.setAttribute("aria-expanded", String(isOpen));
		});

		primaryNav.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", () => {
				body.classList.remove("menu-open");
				menuToggle.setAttribute("aria-expanded", "false");
			});
		});
	}
});

import displayWebsite from "./content";
import homeContent from "./home";
import menuContent from "./menu";
import contactContent from "./contact";

displayWebsite();

const eventController = (() => {
	const main = document.querySelector("main");

	const homeLink = document.getElementById("home-link");
	homeLink.addEventListener("click", () => {
		main.classList.remove("menu-content", "contact-content");
		main.innerHTML = "";
		homeContent();
	});

	const menuLink = document.getElementById("menu-link");
	menuLink.addEventListener("click", () => {
		main.classList.remove("home-content", "contact-content");
		main.innerHTML = "";
		menuContent();
	});

	const contactLink = document.getElementById("contact-link");
	contactLink.addEventListener("click", () => {
		main.classList.remove("home-content", "menu-content");
		main.innerHTML = "";
		contactContent();
	});

	const orderBtn = document.getElementById("order-btn");
	orderBtn.addEventListener("click", () => {
		const main = document.querySelector("main");
		main.classList.remove("home-content", "contact-content");
		main.innerHTML = "";
		menuContent();
	});
})();

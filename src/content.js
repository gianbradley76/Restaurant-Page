import homeContent from "./home";
import menuContent from "./menu";
import contactContent from "./contact";

function createNav() {
	const nav = document.createElement("nav");

	const logoContainer = document.createElement("div");
	logoContainer.classList.add("logo");

	const logo = document.createElement("h4");
	logo.innerText = "The Coffee Shop";
	logoContainer.appendChild(logo);

	const navLinks = document.createElement("ul");
	navLinks.classList.add("nav-links");

	const homeNavItem = document.createElement("li");
	const homeLink = document.createElement("A");
	homeLink.href = "#";
	homeLink.id = "home-link";
	homeLink.innerText = "Home";
	homeNavItem.appendChild(homeLink);
	navLinks.appendChild(homeNavItem);

	const menuNavItem = document.createElement("li");
	const menuLink = document.createElement("A");
	menuLink.href = "#";
	menuLink.id = "menu-link";
	menuLink.innerText = "Menu";
	menuNavItem.appendChild(menuLink);
	navLinks.appendChild(menuNavItem);

	const contactNavItem = document.createElement("li");
	const contactLink = document.createElement("A");
	contactLink.href = "#";
	contactLink.id = "contact-link";
	contactLink.innerText = "Contact Us";
	contactNavItem.appendChild(contactLink);
	navLinks.appendChild(contactNavItem);

	nav.appendChild(logoContainer);
	nav.appendChild(navLinks);

	return nav;
}

function mainContent() {
	const main = document.createElement("main");
	return main;
}

function createFooter() {
	const footer = document.createElement("footer");

	const item1 = document.createElement("p");
	item1.innerText =
		"Something Something Something Something Something Something";

	const item2 = document.createElement("p");
	item2.innerText = "Something Something Something Something Something";

	const item3 = document.createElement("p");
	item3.innerText = "Something Something Something Something";

	footer.appendChild(item1);
	footer.appendChild(item2);
	footer.appendChild(item3);

	return footer;
}

function displayWebsite() {
	const content = document.querySelector(".content");
	content.appendChild(createNav());
	content.appendChild(mainContent());
	content.appendChild(createFooter());
	homeContent();
}

export default displayWebsite;

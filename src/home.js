import menuContent from "./menu";

function createNav() {
	const nav = document.createElement("nav");

	const logoContainer = document.createElement("div");
	logoContainer.classList.add("logo");

	const logo = document.createElement("h4");
	logo.innerText = "The Coffee Shop";
	logoContainer.appendChild(logo);

	const navLinks = document.createElement("ul");
	navLinks.classList.add("nav-links");

	const links = ["Home", "Menu", "Contact Us"];

	links.forEach((link) => {
		const li = document.createElement("li");

		const anchor = document.createElement("A");
		anchor.href = "#";
		anchor.textContent = link;

		li.appendChild(anchor);

		navLinks.appendChild(li);
	});

	nav.appendChild(logoContainer);
	nav.appendChild(navLinks);

	return nav;
}

function homeContent() {
	const main = document.createElement("main");
	main.classList.add("home-content");

	const mainBG = document.createElement("img");
	mainBG.srcset = "./media/home-background.png";

	const homeHeaders = document.createElement("div");
	homeHeaders.classList.add("home-headers");

	const mainHeader = document.createElement("h1");
	mainHeader.innerText = "main header";

	const subHeader = document.createElement("h2");
	subHeader.innerHTML = "sub header";

	homeHeaders.appendChild(mainHeader);
	homeHeaders.appendChild(subHeader);

	const orderBtn = document.createElement("A");
	orderBtn.href = "#";
	orderBtn.classList.add("order-btn");
	orderBtn.innerHTML = "Order Here";

	main.appendChild(mainBG);
	main.appendChild(homeHeaders);
	main.appendChild(orderBtn);

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
	// content.appendChild(homeContent());
	content.appendChild(menuContent());
	content.appendChild(createFooter());
}

export default displayWebsite;

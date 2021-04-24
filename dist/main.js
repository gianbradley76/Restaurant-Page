/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




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
	(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWebsite);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homeContent() {
	const main = document.querySelector("main");
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
	orderBtn.id = "order-btn";
	orderBtn.innerHTML = "Order Here";

	main.appendChild(mainBG);
	main.appendChild(homeHeaders);
	main.appendChild(orderBtn);

	return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeContent);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menuContent() {
	const items = [
		{ name: "Menu Item 1", price: "000.00" },
		{ name: "Menu Item 2", price: "000.00" },
		{ name: "Menu Item 3", price: "000.00" },
		{ name: "Menu Item 4", price: "000.00" },
		{ name: "Menu Item 5", price: "000.00" },
		{ name: "Menu Item 6", price: "000.00" },
		{ name: "Menu Item 7", price: "000.00" },
		{ name: "Menu Item 8", price: "000.00" },
		{ name: "Menu Item 9", price: "000.00" },
	];

	const main = document.querySelector("main");
	main.classList.add("menu-content");

	items.forEach((item) => {
		main.appendChild(createMenuItems(item));
	});

	return main;
}

function createMenuItems(item) {
	const itemName = document.createElement("h2");
	itemName.classList.add("item-name");
	itemName.innerHTML = item.name;

	const itemPrice = document.createElement("h3");
	itemPrice.classList.add("item-price");
	itemPrice.innerHTML = "Php " + item.price;

	const buyBtn = document.createElement("A");
	buyBtn.href = "#";
	buyBtn.classList.add("buy-btn");
	buyBtn.innerText = "Buy Now";

	const overlay = document.createElement("div");
	overlay.classList.add("overlay");

	overlay.appendChild(itemName);
	overlay.appendChild(itemPrice);
	overlay.appendChild(buyBtn);

	const menuItems = document.createElement("div");
	menuItems.classList.add("menu-items");

	menuItems.appendChild(overlay);

	return menuItems;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactContent() {
	const main = document.querySelector("main");
	main.classList.add("contact-content");

	const contactContainer = document.createElement("div");
	contactContainer.classList.add("contact-container");

	const restoInfo = document.createElement("div");
	restoInfo.classList.add("resto-info");
	restoInfo.appendChild(aboutInfo());
	restoInfo.appendChild(contactInfo());

	const verticalLine = document.createElement("div");
	verticalLine.classList.add("vertical-line");

	const customerInfo = document.createElement("div");
	customerInfo.classList.add("customer-info");
	const customerHeader = document.createElement("h2");
	customerHeader.innerText = "Message Us";
	customerInfo.appendChild(customerHeader);
	customerInfo.appendChild(customerForm());

	contactContainer.appendChild(restoInfo);
	contactContainer.appendChild(verticalLine);
	contactContainer.appendChild(customerInfo);

	main.appendChild(contactContainer);

	return main;
}

function aboutInfo() {
	const aboutUS = document.createElement("div");
	aboutUS.classList.add("about-us");

	const aboutHeader = document.createElement("h2");
	aboutHeader.innerText = "About Us";
	aboutUS.appendChild(aboutHeader);

	const aboutText = document.createElement("p");
	aboutText.innerText =
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, accusamus magnam? Aut accusamus corrupti omnis iusto voluptatibus, amet hic aliquam quibusdam molestiae voluptates harum adipisci, quas magni rem veniam voluptate, iure vero sed obcaecati itaque! Et suscipit officia corrupti consequuntur accusamus tempora doloremque, perferendis ipsam ipsum nihil beatae sequi soluta?";
	aboutUS.appendChild(aboutText);

	return aboutUS;
}

function contactInfo() {
	const contactInfoContatiner = document.createElement("div");
	contactInfoContatiner.classList.add("contact-us");

	const contactHeader = document.createElement("h2");
	contactHeader.innerText = "Contact Us";
	contactInfoContatiner.appendChild(contactHeader);

	const addressInfo = document.createElement("div");
	addressInfo.classList.add("contact-item");
	const addressLabel = document.createElement("h3");
	addressLabel.innerText = "Address :";
	addressInfo.appendChild(addressLabel);
	const addressLocation = document.createElement("h4");
	addressLocation.innerText = "123A, Street Rd., Small Area, Big City";
	addressInfo.appendChild(addressLocation);
	contactInfoContatiner.appendChild(addressInfo);

	const contactList = document.createElement("ul");
	contactList.classList.add("contact-list");

	// Column one
	const listColOne = document.createElement("div");

	const mobileInfo = document.createElement("li");
	mobileInfo.classList.add("contact-item");
	const mobileHeader = document.createElement("h3");
	mobileHeader.innerText = "Mobile No.";
	mobileInfo.appendChild(mobileHeader);
	const mobileNum = document.createElement("h4");
	mobileNum.innerText = "123 456 7890";
	mobileInfo.appendChild(mobileNum);
	listColOne.appendChild(mobileInfo);

	const facebookInfo = document.createElement("li");
	facebookInfo.classList.add("contact-item");
	const facebookLink = document.createElement("A");
	facebookLink.classList.add("contact-link");
	facebookLink.href = "#";
	facebookLink.innerText = "Facebook";
	facebookInfo.appendChild(facebookLink);
	listColOne.appendChild(facebookInfo);

	const twitterInfo = document.createElement("li");
	twitterInfo.classList.add("contact-item");
	const twitterLink = document.createElement("A");
	twitterLink.classList.add("contact-link");
	twitterLink.href = "#";
	twitterLink.innerText = "Twitter";
	twitterInfo.appendChild(twitterLink);
	listColOne.appendChild(twitterInfo);

	contactList.appendChild(listColOne);

	// Column two
	const listColTwo = document.createElement("div");

	const emailInfo = document.createElement("li");
	emailInfo.classList.add("contact-item");
	const emailHeader = document.createElement("h3");
	emailHeader.innerText = "Email Address";
	emailInfo.appendChild(emailHeader);
	const emailAddress = document.createElement("h4");
	emailAddress.innerText = "coffeshop@email.com";
	emailInfo.appendChild(emailAddress);
	listColTwo.appendChild(emailInfo);

	const instagramInfo = document.createElement("li");
	instagramInfo.classList.add("contact-item");
	const instagramLink = document.createElement("A");
	instagramLink.classList.add("contact-link");
	instagramLink.href = "#";
	instagramLink.innerText = "Instagram";
	instagramInfo.appendChild(instagramLink);
	listColTwo.appendChild(instagramInfo);

	const youtubeInfo = document.createElement("li");
	youtubeInfo.classList.add("contact-item");
	const youtubeLink = document.createElement("A");
	youtubeLink.classList.add("contact-link");
	youtubeLink.href = "#";
	youtubeLink.innerText = "Youtube";
	youtubeInfo.appendChild(youtubeLink);
	listColTwo.appendChild(youtubeInfo);

	contactList.appendChild(listColTwo);
	contactInfoContatiner.appendChild(contactList);

	return contactInfoContatiner;
}

function customerForm() {
	const customerForm = document.createElement("form");
	customerForm.action = "";
	customerForm.classList.add("message-form");

	const nameLabel = document.createElement("label");
	nameLabel.htmlFor = "name";
	nameLabel.innerText = "Name: ";
	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.name = "name";
	customerForm.appendChild(nameLabel);
	customerForm.appendChild(nameInput);

	const emailLabel = document.createElement("label");
	emailLabel.htmlFor = "email";
	emailLabel.innerText = "Email Address: ";
	const emailInput = document.createElement("input");
	emailInput.type = "text";
	emailInput.name = "email";
	customerForm.appendChild(emailLabel);
	customerForm.appendChild(emailInput);

	const subjectLabel = document.createElement("label");
	subjectLabel.htmlFor = "subject";
	subjectLabel.innerText = "Subject: ";
	const subjectInput = document.createElement("input");
	subjectInput.type = "text";
	subjectInput.name = "subject";
	customerForm.appendChild(subjectLabel);
	customerForm.appendChild(subjectInput);

	const messageLabel = document.createElement("label");
	messageLabel.htmlFor = "subject";
	messageLabel.innerText = "Message: ";
	const messageInput = document.createElement("textarea");
	messageInput.name = "subject";
	messageInput.id = "msg-box";
	messageInput.rows = "5";
	customerForm.appendChild(messageLabel);
	customerForm.appendChild(messageInput);

	const submitBtn = document.createElement("input");
	submitBtn.type = "submit";
	submitBtn.id = "submit-msg";
	submitBtn.value = "Send Message";
	customerForm.appendChild(submitBtn);

	submitBtn.addEventListener("submit", (e) => {
		// Prevent actual submit
		e.preventDefault();
	});

	return customerForm;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContent);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





(0,_content__WEBPACK_IMPORTED_MODULE_0__.default)();

const eventController = (() => {
	const main = document.querySelector("main");

	const homeLink = document.getElementById("home-link");
	homeLink.addEventListener("click", () => {
		main.classList.remove("menu-content", "contact-content");
		main.innerHTML = "";
		(0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();
	});

	const menuLink = document.getElementById("menu-link");
	menuLink.addEventListener("click", () => {
		main.classList.remove("home-content", "contact-content");
		main.innerHTML = "";
		(0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();
	});

	const contactLink = document.getElementById("contact-link");
	contactLink.addEventListener("click", () => {
		main.classList.remove("home-content", "menu-content");
		main.innerHTML = "";
		(0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)();
	});

	const orderBtn = document.getElementById("order-btn");
	orderBtn.addEventListener("click", () => {
		const main = document.querySelector("main");
		main.classList.remove("home-content", "contact-content");
		main.innerHTML = "";
		(0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();
	});
})();

})();

/******/ })()
;
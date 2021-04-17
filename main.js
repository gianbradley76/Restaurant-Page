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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


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
	content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__.default)());
	content.appendChild(createFooter());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWebsite);


/***/ }),
/* 2 */
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

	const main = document.createElement("main");
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
	itemPrice.innerHTML = item.price;

	const buyBtn = document.createElement("A");
	buyBtn.href = "#";
	buyBtn.classList.add("buy-btn");

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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();

})();

/******/ })()
;
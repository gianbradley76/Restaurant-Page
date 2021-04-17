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

export default menuContent;

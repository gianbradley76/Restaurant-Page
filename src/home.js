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

export default homeContent;

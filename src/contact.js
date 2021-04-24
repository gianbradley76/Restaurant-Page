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
	aboutText.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
          								accusamus magnam? Aut accusamus corrupti omnis iusto
          								voluptatibus, amet hic aliquam quibusdam molestiae voluptates
          								harum adipisci, quas magni rem veniam voluptate, iure vero sed
          								obcaecati itaque! Et suscipit officia corrupti consequuntur
          								accusamus tempora doloremque, perferendis ipsam ipsum nihil
          								beatae sequi soluta?`;
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

export default contactContent;

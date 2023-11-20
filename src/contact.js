export default function createContactContent() {
    const contactContent = document.createElement("div");
    contactContent.classList.add("contact-content");

    const contactHeading = document.createElement("h2");
    contactHeading.classList.add("contact-title");
    contactHeading.textContent = "contact";

    const logo = document.createElement("img");
    logo.setAttribute("src", "assets/images/the-noodle-nook-logo.svg");
    logo.setAttribute("alt", "The Noodle Nook Logo");
    logo.classList.add("contact-logo-img");

    const contactDataContainer = document.createElement("div");
    contactDataContainer.classList.add("contact-data-container");

    const addressRow = createDataCell(
        "assets/icons/map-marker-outline.svg",
        "address icon",
        "random address in the world # 123. right there,planet earth"
    );

    const phoneRow = createDataCell(
        "assets/icons/phone-outline.svg",
        "phone icon",
        "123456789"
    );

    const emailRow = createDataCell(
        "assets/icons/email-outline.svg",
        "email icon",
        "thenoodlenook@email.lol"
    );

    contactContent.appendChild(contactHeading);
    contactContent.appendChild(logo);
    contactDataContainer.appendChild(addressRow);
    contactDataContainer.appendChild(phoneRow);
    contactDataContainer.appendChild(emailRow);
    contactContent.appendChild(contactDataContainer);

    return contactContent;
}

function createDataCell(src, alt, dataText) {
    const dataCell = document.createElement("div");
    dataCell.classList.add("contact-data");

    const dataIcon = document.createElement("img");
    dataIcon.setAttribute("src", src);
    dataIcon.setAttribute("alt", alt);
    dataIcon.classList.add("data-icon");

    const dataParagraph = document.createElement("p");
    dataParagraph.classList.add("data-paragraph");
    dataParagraph.textContent = dataText;

    dataCell.appendChild(dataIcon);
    dataCell.appendChild(dataParagraph);

    return dataCell;
}

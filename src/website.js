import createHomeContent from "./home";

function createHeader() {
    // CREATING AND ADDING CLASSES AND ATTRIBUTES TO THE ELEMENTS
    const header = document.createElement("header");
    header.classList.add("header-section");

    const logoImg = document.createElement("img");
    logoImg.classList.add("logo-img");
    logoImg.setAttribute("src", "assets/images/the-noodle-nook-logo.svg");
    logoImg.setAttribute("alt", "The Noodle Nook logo");

    const navBar = document.createElement("nav");
    const navList = document.createElement("ul");
    navList.classList.add("nav-list");

    const listItemHome = document.createElement("li");
    const listItemMenu = document.createElement("li");
    const listItemContact = document.createElement("li");

    const homeLink = document.createElement("a");
    const menuLink = document.createElement("a");
    const contactLink = document.createElement("a");

    homeLink.classList.add("nav-link");
    menuLink.classList.add("nav-link");
    contactLink.classList.add("nav-link");

    homeLink.setAttribute("href", "#");
    menuLink.setAttribute("href", "#");
    contactLink.setAttribute("href", "#");

    homeLink.textContent = "Home";
    menuLink.textContent = "Menu";
    contactLink.textContent = "Contact";

    // APPENDING ELEMENTS
    header.appendChild(logoImg);
    header.appendChild(navBar);

    navBar.appendChild(navList);

    listItemHome.appendChild(homeLink);
    listItemMenu.appendChild(menuLink);
    listItemContact.appendChild(contactLink);

    navList.appendChild(listItemHome);
    navList.appendChild(listItemMenu);
    navList.appendChild(listItemContact);

    return header;
}

function createMainContainer() {
    // CREATING ELEMENTS
    const main = document.createElement("main");

    const mainContent = document.createElement("section");
    mainContent.classList.add("container", "main-content");

    // APPENDING ELEMENTS
    main.appendChild(mainContent);
    mainContent.appendChild(createHomeContent());

    return main;
}

const content = document.getElementById("content");

function initializeWebsite() {
    content.appendChild(createHeader());
    content.appendChild(createMainContainer());
}

export default initializeWebsite;

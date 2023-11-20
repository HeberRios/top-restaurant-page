"use strict";
import initializeWebsite from "./website";
import createHomeContent from "./home";
import createMenuContent from "./menu";
import createContactContent from "./contact";

// CREATING INITIAL STATE OF THE WEBSITE
initializeWebsite();

// SELECTING ELEMENTS
const mainContent = document.querySelector(".main-content");

const homeTab = document.getElementById("home");
const menuTab = document.getElementById("menu");
const contactTab = document.getElementById("contact");

// ADDING EVENT LISTENERS
homeTab.addEventListener("click", function (e) {
    e.preventDefault();
    if (homeTab.classList.contains("active")) {
        return;
    } else {
        menuTab.classList.remove("active");
        contactTab.classList.remove("active");
        homeTab.classList.add("active");

        mainContent.removeChild(mainContent.firstElementChild);
        mainContent.appendChild(createHomeContent());
    }
});

menuTab.addEventListener("click", function (e) {
    e.preventDefault();
    if (menuTab.classList.contains("active")) {
        return;
    } else {
        homeTab.classList.remove("active");
        contactTab.classList.remove("active");
        menuTab.classList.add("active");

        mainContent.removeChild(mainContent.firstElementChild);
        mainContent.appendChild(createMenuContent());
    }
});

contactTab.addEventListener("click", function (e) {
    e.preventDefault();
    if (contactTab.classList.contains("active")) {
        return;
    } else {
        homeTab.classList.remove("active");
        menuTab.classList.remove("active");
        contactTab.classList.add("active");

        mainContent.removeChild(mainContent.firstElementChild);
        mainContent.appendChild(createContactContent());
    }
});

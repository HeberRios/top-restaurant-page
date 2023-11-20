export default function createMenuContent() {
    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    const menuHeading = document.createElement("h2");
    menuHeading.classList.add("menu-title");
    menuHeading.textContent = "menu";

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    // CREATING THE MENU CARDS
    const card_1 = createMenuCard(
        "assets/images/chicken-noodles.jpg",
        "chicken noodles dish",
        "chicken noodles"
    );

    const card_2 = createMenuCard(
        "assets/images/beef-noodles.jpg",
        "beef noodles dish",
        "beef noodles"
    );

    const card_3 = createMenuCard(
        "assets/images/pork-noodles.jpg",
        "pork noodles dish",
        "beef noodles"
    );

    const card_4 = createMenuCard(
        "assets/images/spicy-noodles.jpg",
        "spicy noodles dish",
        "spicy noodles"
    );

    menuContent.appendChild(menuHeading);
    menuContent.appendChild(menuGrid);
    menuGrid.appendChild(card_1);
    menuGrid.appendChild(card_2);
    menuGrid.appendChild(card_3);
    menuGrid.appendChild(card_4);

    return menuContent;
}

function createMenuCard(src, alt, dishName) {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");

    const dishImage = document.createElement("img");
    dishImage.setAttribute("src", src);
    dishImage.setAttribute("alt", alt);
    dishImage.classList.add("dish-img");

    const dishTitle = document.createElement("p");
    dishTitle.textContent = dishName;
    dishTitle.classList.add("dish-title");

    menuCard.appendChild(dishImage);
    menuCard.appendChild(dishTitle);

    return menuCard;
}

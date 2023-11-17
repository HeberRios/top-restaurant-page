export default function createHomeContent() {
    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");

    const paragraph_1 = document.createElement("p");
    paragraph_1.textContent = "The best noodles in your city";
    const paragraph_2 = document.createElement("p");
    paragraph_2.textContent = "Made with love and passion since 1998";
    const paragraph_3 = document.createElement("p");
    paragraph_3.textContent = "Visit us!";

    const chefImg = document.createElement("img");
    chefImg.classList.add("chef-img");
    chefImg.setAttribute("src", "assets/images/chef-making-noodles.jpg");
    chefImg.setAttribute("alt", "Chef cooking noodles");

    homeContent.appendChild(paragraph_1);
    homeContent.appendChild(paragraph_2);
    homeContent.appendChild(chefImg);
    homeContent.appendChild(paragraph_3);

    return homeContent;
}

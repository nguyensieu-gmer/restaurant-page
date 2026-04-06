import menuImage from "./image/menu_image.avif";

export function makeMenu(){
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    title.textContent = "Menu";
    content.appendChild(title);

    const description = document.createElement("h2");
    description.textContent = "MAIN COURSES";
    content.appendChild(description);

    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    image.src = menuImage;
    image.alt = "menu image";
    imageContainer.appendChild(image);
    content.appendChild(imageContainer);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Grilled Chicken – Juicy grilled chicken served with rice and fresh salad. $12.99";
    content.appendChild(paragraph);
}
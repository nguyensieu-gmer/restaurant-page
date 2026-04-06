import homeImage from "./image/home_image.avif";

export function makeHome(){
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    title.textContent = "Home";
    content.appendChild(title);

    const description = document.createElement("h2");
    description.textContent = "Wellcome to our restaurant";
    content.appendChild(description);

    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    image.src = homeImage;
    image.alt = "home image";
    imageContainer.appendChild(image);
    content.appendChild(imageContainer);

    const paragraph = document.createElement("p");
    paragraph.textContent = "if i would have a restaurant. It will be shushi restaurant";
    content.appendChild(paragraph);
}
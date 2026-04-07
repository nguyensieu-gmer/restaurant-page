import homeImage from "./image/home_image.avif";
import "./home.css";

export function makeHome(){
    const content = document.getElementById("content");

    const image = document.createElement("img");

    image.src = homeImage;
    image.style.height = "auto";
    image.style.width = "100%";
    image.style.zIndex = "-1";
    image.style.position = "absolute";
    image.style.top = "0";
    image.style.filter = "brightness(80%)";
    content.appendChild(image);

    const div = document.createElement("div");
    div.classList.add("home_div");

    const title = document.createElement("h1");
    title.textContent = "Home";

    const description = document.createElement("h2");
    description.textContent = "Wellcome to our restaurant";

    const paragraph = document.createElement("p");
    paragraph.textContent = "if i would have a restaurant. It will be shushi restaurant";

    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(paragraph);

    content.appendChild(div);
}
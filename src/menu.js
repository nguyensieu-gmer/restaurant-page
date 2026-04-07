import menuImage from "./image/menu_image.avif";
import "./menu.css";
import shushi1 from "./image/shushi1.avif";
import shushi2 from "./image/shushi2.avif";
import shushi3 from "./image/shushi3.avif";
import shushi4 from "./image/shushi4.avif";
import shushi5 from "./image/shushi5.avif";
import shushi6 from "./image/shushi6.avif";
import shushi7 from "./image/shushi7.avif";
import shushi8 from "./image/shushi8.avif";

export function makeMenu(){
    const shushiList = [shushi1, shushi2, shushi3, shushi4, shushi5, shushi6, shushi7, shushi8];
    const content = document.getElementById("content");

    const image = document.createElement("img");
    image.src = menuImage;
    image.style.height = "auto";
    image.style.width = "100%";
    image.style.zIndex = "-1";
    image.style.position = "absolute";
    image.style.top = "0";
    image.style.filter = "brightness(80%)";
    content.appendChild(image);

    const h1 = document.createElement("h1");
    h1.classList.add("title")
    h1.textContent = "Menu";
    content.appendChild(h1);

    const grid = document.createElement("div");
    grid.classList.add("grid_contain");
    for (let i = 0; i < shushiList.length; i++){
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = shushiList[i];
        img.alt = `shushi${i}`;
        div.appendChild(img);
        grid.appendChild(div);
    }
    content.appendChild(grid);
}
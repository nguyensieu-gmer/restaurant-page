import aboutImage from "./image/about_image.avif";
import "./about.css";
import employee1 from "./image/employee.avif";
import employee2 from "./image/employee1.jpg";
import employee3 from "./image/employee2.jpg";

export function makeAbout(){
    const employees = [employee3, employee1, employee2];

    const content = document.getElementById("content");

    const image = document.createElement("img");
    image.src = aboutImage;
    image.style.height = "auto";
    image.style.width = "100%";
    image.style.zIndex = "-1";
    image.style.position = "absolute";
    image.style.top = "0";
    image.style.filter = "brightness(80%)";
    content.appendChild(image);

    const h1 = document.createElement("h1");
    h1.textContent = "About Us";
    h1.classList.add("h1_title");
    content.appendChild(h1);

    const flex_div = document.createElement("div");
    flex_div.classList.add("flex_div");
    for (let employee of employees){
        const item = document.createElement("div");
        item.classList.add("item");
        const div = document.createElement("div");
        const image = document.createElement("img");
        image.src = employee;
        const h1 = document.createElement("h1");
        h1.textContent = "Employee";
        const p = document.createElement("p");
        p.textContent = "lorem inspirum";
        div.appendChild(image);
        item.appendChild(div);
        item.appendChild(h1);
        item.appendChild(p);
        flex_div.appendChild(item);
    }
    content.appendChild(flex_div);
}
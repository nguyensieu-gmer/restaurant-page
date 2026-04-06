import aboutImage from "./image/about_image.avif";

export function makeAbout(){
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    title.textContent = "About Us";
    content.appendChild(title);

    const description = document.createElement("h2");
    description.textContent = "We specialize in [type of cuisine], bringing you carefully crafted dishes made from fresh, high-quality ingredients. Our passion for food comes from [your story – family tradition, love of cooking, cultural inspiration, etc.].";
    content.appendChild(description);

    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    image.src = aboutImage;
    image.alt = "about image";
    imageContainer.appendChild(image);
    content.appendChild(imageContainer);

    const paragraph = document.createElement("p");
    paragraph.textContent = "At [Restaurant Name], we believe that dining is more than just eating — it’s an experience. Whether you're here for a quick meal or a special occasion, we aim to make every visit memorable.Join us and enjoy flavors that feel like home.";
    content.appendChild(paragraph);
}
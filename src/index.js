import { makeAbout } from "./about.js";
import { makeHome } from "./home.js";
import { makeMenu } from "./menu.js";
import "./style.css";

function srceenControl(){
    makeHome();

    const content = document.getElementById("content");
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const menu = document.getElementById("menu");

    const resetContent = () => {
        content.innerHTML = "";
    }

    home.addEventListener("click", e => {
        resetContent();
        makeHome();
    });

    about.addEventListener("click", e => {
        resetContent();
        makeAbout();
    });

    menu.addEventListener("click", e => {
        resetContent();
        makeMenu();
    });
}

srceenControl();
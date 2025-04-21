import "./styles.css";
import img1 from "/src/assets/bg1.png";
import loadMenu from "./menu.js"; 
import loadContact from './contact.js';


const nav = document.querySelector("nav");
const form = document.createElement("form");
const input = document.createElement("input");

input.setAttribute("type", "text");
input.setAttribute("placeholder", "Type here");
input.classList.add("input");
form.appendChild(input);
nav.appendChild(form);

const container = document.createElement("div");
container.setAttribute("class", "index-container");
document.body.appendChild(container);

 

const Menu = document.querySelector(".Menu");
Menu.addEventListener("click", () => {
    container.innerHTML = "";
    loadMenu();
});

const contactButton = document.querySelector(".Contact");
contactButton.addEventListener("click", () => {
    container.innerHTML = ""; // 
    loadContact();
});


export default function loadHome() {

    container.innerHTML = ""; 

    const left = document.createElement("div");
    left.classList.add("left");
 
    const top = document.createElement("p");
    top.classList.add("top");
    top.innerHTML = "Le Petit Dinner.<br> Welcome to our restaurant!";
    left.appendChild(top);
    

    const middle2 = document.createElement("p");
    middle2.classList.add("middle2");
    middle2.innerText = "Welcome to Le Petit Dinner, where great taste meets a cozy atmosphere! Enjoy delicious, freshly made dishes crafted with love and the finest ingredients. Whether you're here for a quick bite or a full-course meal, we promise a delightful dining experience. Come savor the flavors!";
    left.appendChild(middle2);

    const middle3 = document.createElement("Button");
    middle3.classList.add("middle3");
    middle3.innerText = "ORDER NOW";
    left.appendChild(middle3);

    const bottom = document.createElement("p");
    bottom.classList.add("bottom");
    bottom.innerHTML = 'Follow us on <a href="#">Telegram</a> and <a href="#">Instagram</a> | +251912345678';
    left.appendChild(bottom);

    container.appendChild(left);

    const img = document.createElement("img");
    img.setAttribute("src", img1);
    img.classList.add("img1");
    container.appendChild(img);
}
loadHome();


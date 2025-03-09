import "./styles.css";
import "./about.js";
import "./menu.js";
import "./contact.js"

import back from "./assets/bg.jpg";

const body = document.querySelector("body");
body.style.backgroundImage = `url(${back})`;
body.style.backgroundSize = "cover";
body.style.backgroundAttachment = "fixed";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";

const ul = document.querySelector("ul");
ul.style.display='flex';
ul.style.border = '1px solid white';  
ul.style.borderRadius = '60px';      
ul.style.padding = '10px 20px';       
ul.style.width = '80%';               
ul.style.margin = 'auto';
ul.style.marginTop= '20px'           


const tabs = document.querySelectorAll('.tabs');
tabs.forEach(tab => {
    tab.style.color = "white";
});


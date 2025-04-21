import "./menu.css";
import loadHome from "./index.js";
import dessert_img from "/src/assets/cake.jpg";
import firstimg from "/src/assets/first.jpg";
import drinks_img from "/src/assets/drink.jpeg";
import loadContact from './contact.js';

const container = document.createElement("div");
container.classList.add("menu-container");
document.body.appendChild(container);

export default function loadMenu() {
    container.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add("menu-title");
    title.innerText = "Menu";
    container.appendChild(title);

    const line1 = document.createElement("div");
    line1.classList.add("line1");
    const line2 = document.createElement("div");
    line2.classList.add("line2");
    container.appendChild(line1);
    container.appendChild(line2);

    const first = document.createElement("div");
    first.classList.add("first");

    const first_left = document.createElement("img");
    first_left.classList.add("first_left");
    first_left.setAttribute("src", firstimg);
    first_left.setAttribute("alt", "chicken steak");

    const first_right = document.createElement("div");
    first_right.classList.add("first_right");
    const first_right_title = document.createElement("h2");
    first_right_title.classList.add("first_right_title");
    first_right_title.innerText = "Main Course";
    first_right.appendChild(first_right_title);

    const foods = document.createElement("div");
    foods.classList.add("foods");

    function createFoodItem(name, description, price) {
        const food = document.createElement("div");
        food.classList.add("food-item");

        const foodTitle = document.createElement("h3");
        foodTitle.innerText = name;

        const foodDesc = document.createElement("p");
        foodDesc.innerText = description;

        const foodPrice = document.createElement("span");
        foodPrice.innerText = price;
        foodPrice.classList.add("price");

        food.appendChild(foodTitle);
        food.appendChild(foodDesc);
        food.appendChild(foodPrice);

        return food;
    }

    // Main course items
    foods.appendChild(createFoodItem("Le Petit Special Combo", "House-special combo with chicken, steak, and roasted veggies.", "$18.99"));
    foods.appendChild(createFoodItem("Spaghetti Bolognese", "Rich tomato sauce with seasoned beef over fresh pasta.", "$12.50"));
    foods.appendChild(createFoodItem("Tofu Teriyaki Bowl", "Grilled tofu, veggies, and rice in sweet teriyaki sauce.", "$11.00"));
    foods.appendChild(createFoodItem("Butter Chicken", "Creamy Indian-style chicken curry served with naan.", "$13.25"));
    foods.appendChild(createFoodItem("Grilled Salmon", "Fresh salmon filet with lemon butter and veggies.", "$16.75"));
    foods.appendChild(createFoodItem("BBQ Ribs Platter", "Slow-cooked ribs glazed in house BBQ sauce.", "$17.50"));

    first_right.appendChild(foods);
    first.appendChild(first_left);
    first.appendChild(first_right);
    container.appendChild(first);

    const second = document.createElement("div");
    second.classList.add("second");

    const second_left = document.createElement("img");
    second_left.classList.add("second_left");
    second_left.setAttribute("src", dessert_img);
    second_left.setAttribute("alt", "dessert image");

    const second_right = document.createElement("div");
    second_right.classList.add("second_right");

    const second_right_title = document.createElement("h2");
    second_right_title.classList.add("second_right_title");
    second_right_title.innerText = "Dessert Menu";
    second_right.appendChild(second_right_title);

    const desserts = document.createElement("div");
    desserts.classList.add("foods");

    desserts.appendChild(createFoodItem("Chocolate Lava Cake", "Warm chocolate cake with gooey center and vanilla ice cream.", "$6.50"));
    desserts.appendChild(createFoodItem("Tiramisu", "Classic Italian layered dessert with mascarpone and espresso.", "$5.75"));
    desserts.appendChild(createFoodItem("Baklava", "Flaky pastry with chopped nuts and sweet syrup.", "$4.99"));
    desserts.appendChild(createFoodItem("Cheesecake", "Creamy New York-style cheesecake with a graham cracker crust.", "$5.25"));
    desserts.appendChild(createFoodItem("Fruit Tart", "Fresh seasonal fruits on custard-filled buttery crust.", "$5.00"));
    desserts.appendChild(createFoodItem("Crème Brûlée", "Silky vanilla custard topped with a crispy caramelized sugar layer.", "$5.95"));

    second_right.appendChild(desserts);
    second.appendChild(second_left);
    second.appendChild(second_right);
    container.appendChild(second);

    
    const drinksSection = document.createElement("div");
    drinksSection.classList.add("drinks");

    const drinks_left = document.createElement("img");
    drinks_left.classList.add("drinks_left");
    drinks_left.setAttribute("src", drinks_img);
    drinks_left.setAttribute("alt", "drinks and juice image");

    const drinks_right = document.createElement("div");
    drinks_right.classList.add("drinks_right");

    const drinks_right_title = document.createElement("h2");
    drinks_right_title.classList.add("drinks_right_title");
    drinks_right_title.innerText = "Drinks & Juice";
    drinks_right.appendChild(drinks_right_title);

    const drinksList = document.createElement("div");
    drinksList.classList.add("foods");

    drinksList.appendChild(createFoodItem("Fresh Orange Juice", "Squeezed oranges served chilled.", "$3.50"));
    drinksList.appendChild(createFoodItem("Mango Smoothie", "Blended ripe mangoes with a hint of honey.", "$4.25"));
    drinksList.appendChild(createFoodItem("Iced Coffee", "Cold brew coffee over ice with cream.", "$3.75"));
    drinksList.appendChild(createFoodItem("Lemon Mint Cooler", "Refreshing lemonade with mint leaves.", "$3.00"));
    drinksList.appendChild(createFoodItem("Mocktail", "House-blend tropical flavors, non-alcoholic.", "$4.75"));
    drinksList.appendChild(createFoodItem("Herbal Tea", "Calming herbal infusion served hot or cold.", "$2.50"));

    drinks_right.appendChild(drinksList);
    drinksSection.appendChild(drinks_left);
    drinksSection.appendChild(drinks_right);
    container.appendChild(drinksSection);
}


const Home = document.querySelector(".Home");
Home.addEventListener("click", () => {
    container.innerHTML = "";
    loadHome();
});

const contactButton = document.querySelector(".Contact");
contactButton.addEventListener("click", () => {
    container.innerHTML = ""; // 
    loadContact();
});
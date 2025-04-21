import "./contact.css";
import loadHome from "./index.js";
import loadMenu from "./menu.js";

const container = document.createElement("div");
container.classList.add("contact-container");
document.body.appendChild(container);

export default function loadContact() {
    container.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add("contact-title");
    title.innerText = "Contact Us";
    container.appendChild(title);

    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    const nameGroup = document.createElement("div");
    nameGroup.classList.add("form-group");

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerText = "Your Name:";
    nameGroup.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("placeholder", "Enter your name");
    nameGroup.appendChild(nameInput);

    formContainer.appendChild(nameGroup);

    const emailGroup = document.createElement("div");
    emailGroup.classList.add("form-group");

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.innerText = "Your Email:";
    emailGroup.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("placeholder", "Enter your email");
    emailGroup.appendChild(emailInput);

    formContainer.appendChild(emailGroup);

    const phoneGroup = document.createElement("div");
    phoneGroup.classList.add("form-group");

    const phoneLabel = document.createElement("label");
    phoneLabel.setAttribute("for", "phone");
    phoneLabel.innerText = "Your Phone Number:";
    phoneGroup.appendChild(phoneLabel);

    const phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "tel");
    phoneInput.setAttribute("id", "phone");
    phoneInput.setAttribute("placeholder", "Enter your phone number");
    phoneGroup.appendChild(phoneInput);

    formContainer.appendChild(phoneGroup);

    
    const subjectGroup = document.createElement("div");
    subjectGroup.classList.add("form-group");

    const subjectLabel = document.createElement("label");
    subjectLabel.setAttribute("for", "subject");
    subjectLabel.innerText = "Subject:";
    subjectGroup.appendChild(subjectLabel);

    const subjectSelect = document.createElement("select");
    subjectSelect.setAttribute("id", "subject");
    const subjects = ["General Inquiry", "Feedback", "Support", "Other"];
    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject;
        option.innerText = subject;
        subjectSelect.appendChild(option);
    });
    subjectGroup.appendChild(subjectSelect);

    formContainer.appendChild(subjectGroup);

    const messageGroup = document.createElement("div");
    messageGroup.classList.add("form-group");

    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.innerText = "Your Message:";
    messageGroup.appendChild(messageLabel);

    const messageTextArea = document.createElement("textarea");
    messageTextArea.setAttribute("id", "message");
    messageTextArea.setAttribute("placeholder", "Enter your message");
    messageTextArea.setAttribute("rows", "5");
    messageGroup.appendChild(messageTextArea);

    formContainer.appendChild(messageGroup);

    const submitButton = document.createElement("button");
    submitButton.classList.add("submit-btn");
    submitButton.innerText = "Send Message";

    formContainer.appendChild(submitButton);

    container.appendChild(formContainer);

    submitButton.addEventListener("click", (e) => {
        e.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const subject = subjectSelect.value;
        const message = messageTextArea.value;

        if (name && email && message) {
            alert(`Thank you for your message, ${name}! We will get back to you soon.`);
            nameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";
            subjectSelect.value = "General Inquiry";
            messageTextArea.value = "";
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
}

const Home = document.querySelector(".Home");
Home.addEventListener("click", () => {
    container.innerHTML = "";
    loadHome();
});

const Menu = document.querySelector(".Menu");
Menu.addEventListener("click", () => {
    container.innerHTML = "";
    loadMenu();
});

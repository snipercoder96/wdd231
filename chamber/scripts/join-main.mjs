import { datesModified } from "./footer-join.mjs";
import { membershipCards } from "./membershipcards-join.mjs";

function hamburgerButton() {
    const button = document.getElementById("ham-btn");
    const navigation = document.getElementById("nav-toggle");

    button.addEventListener("click", () => {
        navigation.classList.toggle("show");
        if (navigation.classList.contains("show")){
            button.textContent = "\u00D7";

        } else{
            button.textContent = "\u2630";
        }
    });
}

const timestampInput = document.getElementById("timestamp");
timestampInput.value = new Date().toLocaleString();


datesModified();
membershipCards();
hamburgerButton();
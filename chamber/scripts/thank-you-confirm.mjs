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

function thankYouPage() {
    const params = new URLSearchParams(window.location.search);
    const sectionId = document.getElementById("thankyou");

    const firstName = params.get("firstName");
    const lastName = params.get("lastName");
    const organizationTitle = params.get("organizationTitle");
    const emailAddress = params.get("emailAddress");
    const mobileNumber = params.get("mobileNumber");
    const organizationName = params.get("organizationName");
    const membershipLevel = params.get("membershipLevel");
    const businessDescription = params.get("businessDescription");
    const timestamp = params.get("timestamp");


    sectionId.innerHTML = ` 
    <h1>Thank you!</h1>
    <div class="outer">
        <div class="inner">
        &#10004;</div>
        </div>
    </div>
    <div class="confirmation">
        <p><strong>First Name:</strong> ${firstName}</p> 
        <p><strong>Last Name:</strong> ${lastName}</p> 
        <p><strong>Organization Title:</strong> ${organizationTitle}</p> 
        <p><strong>Email Address:</strong> ${emailAddress}</p> 
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p> 
        <p><strong>Organization Name:</strong> ${organizationName}</p> 
        <p><strong>Membership Level:</strong> ${membershipLevel}</p> 
        <p><strong>Business Description:</strong> ${businessDescription}</p> 
        <p><strong>Timestamp:</strong> ${timestamp}</p>
    </div>`;
}

import { footerInfo } from "./footer-func.mjs";

thankYouPage();
hamburgerButton();
footerInfo();
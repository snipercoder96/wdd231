function hamburgerButton(button, navigation) {

    button.addEventListener("click", () => {
        navigation.classList.toggle("show");
        button.textContent = navigation.classList.contains("show") ? "\u00D7" : "\u2630";
    });
}


function viewToggle(businessInfo, gridBtn, listBtn) {

    businessInfo.classList.add("grid");

    gridBtn.addEventListener("click", () => {
        businessInfo.classList.add("grid");
        businessInfo.classList.remove("list");
        gridBtn.classList.add("active");
        listBtn.classList.remove("active");
    });

    listBtn.addEventListener("click", () => {
        businessInfo.classList.add("list");
        businessInfo.classList.remove("grid");
        listBtn.classList.add("active");
        gridBtn.classList.remove("active");
    });
}

export { hamburgerButton, viewToggle }
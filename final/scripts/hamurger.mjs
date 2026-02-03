function hamburgerButton(buttonId, navigationID) {
    const button = document.getElementById(buttonId);
    const navigation = document.getElementById(navigationID);

    button.addEventListener("click", () => {
        if (navigation.classList.contains("show")) {
           
            navigation.classList.remove("show");
            navigation.classList.add("hide");
            button.textContent = "\u2630"; 
        } else {
           
            navigation.classList.remove("hide");
            navigation.classList.add("show");
            button.textContent = "\u00D7"; 
        }
    });
}

export { hamburgerButton };

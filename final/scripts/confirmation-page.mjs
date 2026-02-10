function confirmationInfo() {
    const info = new URLSearchParams(window.location.search);
    const formInfo = document.getElementById("confirmationInfo");

    formInfo.innerHTML = `
        <p><strong>Name:</strong> ${info.get("name")}</p>
        <p><strong>Email:</strong> ${info.get("email")}</p>
        <p><strong>Level:</strong> ${info.get("level")}</p>
        <p><strong>Favorite Opening:</strong> ${info.get("favoriteOpening")}</p>
    `;
}

export { confirmationInfo };

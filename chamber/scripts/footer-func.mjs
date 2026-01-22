function footerInfo() {
    const modifiedDate = document.querySelectorAll("#current-year, #lastModified");
    modifiedDate[0].textContent = new Date().getFullYear();

    modifiedDate[1].textContent = document.lastModified;
}

export { footerInfo }
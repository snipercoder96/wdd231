function datesModified(){
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = new Date().toLocaleDateString("en-us", {
        weekday: "long",
        day: "2-digit",
        month: "long"
    });
}


export { datesModified };
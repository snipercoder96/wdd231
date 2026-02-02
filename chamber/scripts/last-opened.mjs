function lastOpened() {
    const lastVisited = document.getElementById("lastVisit");
    const lastDate = localStorage.getItem("lastVisit");
    const now = Date.now();

    let message = "";

    if (!lastDate) {
        message = "🎊Welcome! Let us know if you have any questions.";
    } else {
        const diffMs = now - parseInt(lastDate, 10);
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffMs < 1000 * 60 * 60 * 24) {
            message = "Back so soon! Awesome!🤩";
        } else if (diffDays === 1) {
            message = "You last visited 1 day ago.😄";
        } else {
            message = `You last visited ${diffDays} days ago.🕔`;
        }
    }

    lastVisited.textContent = message;
    localStorage.setItem("lastVisit", now);
}

document.addEventListener("DOMContentLoaded", lastOpened);

export { lastOpened };

function footer(currentYear, lastModified){
    document.getElementById(currentYear).textContent = new Date().getFullYear();
    document.getElementById(lastModified).textContent = new Date().toLocaleString();
}


export {footer};
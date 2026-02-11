/*
- get open modal
- add event listener
- get signupform
- show and close modal
*/


function signUp() {
    document.getElementById("openModal").addEventListener("click", () => {
        document.getElementById("signUpForm").showModal();
    });

    document.getElementById("closeSignIn").addEventListener("click", () => {
        document.getElementById("signUpForm").close();
    });
}



export { signUp };


const STORAGE_KEY = 'communitySignUp';

function saveForm(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.warn('Could not save sign-up data', e);
    }
}

function loadForm() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function wireFormAutosave() {
    const dialog = document.getElementById('signUpForm');
    if (!dialog) return;
    const form = dialog.querySelector('form');
    if (!form) return;

    dialog.addEventListener('show', () => {
        const data = loadForm();
        if (data.name) form.querySelector('#name').value = data.name;
        if (data.email) form.querySelector('#email').value = data.email;
        if (data.level) form.querySelector('#level').value = data.level;
        if (data.favoriteOpening) form.querySelector('#favoriteOpening').value = data.favoriteOpening;
    });

    
    form.addEventListener('input', () => {
        const data = {
            name: form.querySelector('#name').value || '',
            email: form.querySelector('#email').value || '',
            level: form.querySelector('#level').value || '',
            favoriteOpening: form.querySelector('#favoriteOpening').value || ''
        };
        saveForm(data);
    });

   
    form.addEventListener('submit', () => {
        try { localStorage.removeItem(STORAGE_KEY); } catch (e) { }
    });
}


document.addEventListener('DOMContentLoaded', wireFormAutosave);

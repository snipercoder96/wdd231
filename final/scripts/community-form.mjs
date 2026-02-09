/*
- get open modal
- add event listener
- get signupform
- show and close modal
 */


function signUp(){
    document.getElementById("openModal").addEventListener("click", () =>{
    document.getElementById("signUpForm").showModal();
    });

    document.getElementById("closeSignIn").addEventListener("click", () =>{
        document.getElementById("signUpForm").close();
    });
}



export {signUp};
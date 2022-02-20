const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#to-do-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// db에 username이 있는가 ? 
const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName === null){// 없으면 form
    loginForm.classList.toggle(HIDDEN_CLASSNAME);// db에 username이 없다면 다시 form 생김
}
else{// 있으면 greeting
    greeting.innerText = `Hello ${savedUserName}`; 
    greeting.classList.toggle(HIDDEN_CLASSNAME);
    toDoForm.classList.toggle(HIDDEN_CLASSNAME);
}

// submit을 눌렀을 때
function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.toggle(HIDDEN_CLASSNAME);
    toDoForm.classList.toggle(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", loginSubmit);




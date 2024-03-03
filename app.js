const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(evt){
    evt.preventDefault();
    const typedUserName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typedUserName);
    loginForm.classList.add(HIDDEN_CLASSNAME);


    paintGreetings()
}


function paintGreetings()
{
    const userName = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null)
{
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings();
}




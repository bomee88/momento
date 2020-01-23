const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
    greating = document.querySelector(".js-greating");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreating(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreating(text){
    form.classList.remove(SHOWING_CN);
    greating.classList.add(SHOWING_CN);
    greating.innerText = `Hello, ${text}!`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //she is not
        askForName();
    }else{
        //she is
        paintGreating(currentUser);
    }
}

function init(){
    loadName();
}

init();
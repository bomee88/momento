const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    fnsList = document.querySelector(".js-fnsList");


const TODOS_LS = "Pending";
const FNSDOS_LS = "Finished";

// function filterFn(toDo){
//     return toDo.id === 1
// }

let toDos = [];
let fnsDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function saveFnsDos(){
    localStorage.setItem(FNSDOS_LS, JSON.stringify(fnsDos));
}
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}
function deleteFns(event){
    const btn = event.target;
    const li = btn.parentNode;
    fnsList.removeChild(li);
    const cleanFns = fnsDos.filter(function(fnsDo){
        return fnsDo.id !== parseInt(li.id);
    });
    fnsDos = cleanFns;
    saveFnsDos();
}
function backTodo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    fnsList.removeChild(li);
    const cleanFns = fnsDos.filter(function(fnsDo) {
      return fnsDo.id !== parseInt(li.id);
    });
    fnsDos = cleanFns;
    saveFnsDos();
    paintToDo(li.querySelector("span").innerHTML);
}
function fnsToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
    paintFns(li.querySelector("span").innerHTML);
}

function paintFns(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const backBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = fnsDos.length + 1;
    span.innerText = text;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteFns);
    backBtn.innerText = "back";
    backBtn.addEventListener("click", backTodo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(backBtn);
    li.id = newId;
    fnsList.appendChild(li);
    const fnsObj = {
        text: text,
        id: newId
    }
    fnsDos.push(fnsObj);
    saveFnsDos();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const fnsBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    fnsBtn.innerText = "finish";
    fnsBtn.addEventListener("click", fnsToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(fnsBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); //LS = 로컬 스토리지
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}
function loadFnsDos(){
    const loadedFnsDos = localStorage.getItem(FNSDOS_LS); //LS = 로컬 스토리지
    if(loadedFnsDos !== null){
        const parsedFnsDos = JSON.parse(loadedFnsDos);
        parsedFnsDos.forEach(function(fnsDo){
            paintFns(fnsDo.text);
        });
    }
}
function init(){
    loadToDos();
    loadFnsDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
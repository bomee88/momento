const form = document.querySelector(".js-form"), //선택자 변수 선언
    input = form.querySelector("input");
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser", 
      SHOWING_CN = "showing";

function saveName(text){ //step 2-3. 
    localStorage.setItem(USER_LS, text);//로컬스토리지에 유저이름 저장
}

function handleSubmit(event){ //step 2-2.
    event.preventDefault(); //인풋에 작성하고 엔터시 정보를 서버로 보내는 이벤트를 차단
    const currentValue = input.value; 
    paintGreeting(currentValue); //인풋밸류(유저네임)값을 함수에 인자로 전달 2-3.
    saveName(currentValue); //인풋벨류(유저네임)값을 함수에 인자로 전달 3-1.
}

function askForName(){ //step 2-1.
    form.classList.add(SHOWING_CN); //인풋 나타내기
    form.addEventListener("submit",handleSubmit); //사용자 엔터시 핸들섭밋 함수로 섭밋전달
}

function paintGreeting(text){ //step 3-1.
    form.classList.remove(SHOWING_CN); //폼 모양을 지우기
    greeting.classList.add(SHOWING_CN); //텍스트 모양 나타내기
    greeting.innerText = `Hello, ${text}!`; //텍스트 모양에 유저이름 찍어주기
}

function loadName(){ //step 1.
    const currentUser = localStorage.getItem(USER_LS); //로컬 스토리지에 유저네임 있니?
    if(currentUser === null){ //없을 경우 2-1.
        askForName();
    }else{ //있을 경우 3-1.
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
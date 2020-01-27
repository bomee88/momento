const body = document.querySelector("body");

const IMG_NUMBER = 5;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `img/img${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImage");
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();

//Math.ceil() 올림
//Math.floor( 버림
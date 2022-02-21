const display = document.querySelector(".value");
const keyCal = document.querySelectorAll(".key");
const clear = document.querySelector(".clear");
const result = document.querySelector(".equal");
const sound = document.querySelector("audio");


keyCal.forEach(item => {
    item.addEventListener("click" , showDisplay);
});
result.addEventListener("click" , resultFunc);
clear.addEventListener("click" , clearFunc);


function showDisplay(event) {
    const x = event.target.innerText;
    if (display.innerText == 0) {
         display.innerText = x;
    } else {
        display.innerText += x;
    }
    sound.currentTime = 0;
    sound.play();
}

function resultFunc() {
    let displayValue = display.innerText;
    display.innerText = eval(displayValue);
    sound.currentTime = 0;
    sound.play();
}

function clearFunc() {
    let displayValue = display.innerText;
    if (displayValue.length == 1) {
        display.innerText = 0;
    } else {
        display.innerText = displayValue.substring(0 , displayValue.length -1);
    }
    sound.currentTime = 0;
    sound.play();
}



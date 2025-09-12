let display = document.getElementById("display");
function clearDisplay(){
    display.value = "";
}

function appendToDisplay(val){
    display.value += val;
}

function calculate(){
    display.value = eval(display.value);
}
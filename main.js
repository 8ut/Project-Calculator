const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}



var split = display.value.split(" ")
console.log(split)

function calculate() {
    var split = display.value.split("")
    console.log(split)
    console.log(split.length)

    for(let i = 0; i< split.length; i++){
        console.log(split[i])
    }
}




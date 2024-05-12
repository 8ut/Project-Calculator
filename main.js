const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}


var operandStack = []
var operaterStack = []

var split = display.value.split(" ")
console.log(split)

function calculate() {
    var split = display.value.split("")
    console.log(split)
    console.log(split.length)

    for(let i = 0; i< split.length; i++){
        if(!isNaN(split[i])){
            console.log(operaterStack.push(split[i]))
            var val = operaterStack.pop()
            console.log(val)
        }else{

        }

    }
}

operandStack.pop()

function simplify(){

}




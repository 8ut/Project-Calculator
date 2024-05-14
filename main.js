const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}


var operandStack = []
var operaterStack = []

var split = display.value.split("")
console.log(split)




function calculate() {
    var split = display.value.split("")
    console.log(split)
    console.log(split.length)

    for (let i = 0; i < split.length; i++) {
        if (!isNaN(split[i])) {
            console.log(operaterStack.push(split[i]))
            var val = operaterStack.pop()
            console.log(val + "num")
        } else if (isNaN(split[i] && operandStack.length === 0)) {
            operandStack.push(split[i])
        } else if (isNaN(split[i] && operandStack.length != 0)) {

        } else {//if empty
            console.log("error")
        }
        console.log(operandStack)
    }
}

operandStack.pop()

function simplify() {

}


function precedenceCheck(op) {
    switch (op) {

        case '+':
        case '-':
            return 0;
            case "*":
                case "/":
                    return 1;


    }
}

console.log(precedenceCheck("*") + "hello")



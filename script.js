// CALCULATION PROGRAM

const display = document.getElementById("display");
const trimmedDisplayValue = display.value.trim();
const lastChar = trimmedDisplayValue.slice(-1);

function appendToDisplay(input) {
    if (display.value == "0" && input != "." && input != "+" && input != "-" && input != "*" && input != "/") {
        clearDisplay()
    }
    else {
        display.value += input;
    }

    
}

function clearDisplay() {
    display.value = "";
}

function handleBrackets() {
    if (lastChar === "" || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        display.value += "(";
    } else if (lastChar >= "0" && lastChar <= "9") {
        display.value += ")";
    } 
}



function calculate() {

    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }

    if (display.value == "Error") {
        setTimeout(() => {
            clearDisplay();
        }, 800);
    }

    // if (lastChar == "/" && display.value == "0"){
    //     return display.value = "Can not divide by zero"
    // }


    
}



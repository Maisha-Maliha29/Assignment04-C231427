let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        // Ensure expression is valid before evaluating
        if (display.value.trim() === "") return;
        
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

let display = document.getElementById("display");

function fordisplay(value) {
    display.value += value;
}

function cleardisplay() {
    display.value = "";
}

function result() {
    try {
        // Ensure expression is valid before evaluating
        if (display.value.trim() === "") return;
        
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

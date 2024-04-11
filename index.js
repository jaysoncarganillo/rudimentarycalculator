const display = document.getElementById("display");

// Appends whichever button is clicked to the display area
function appendToDisplay(input) {
    display.value += input;
}

// Clears the Display
function clearDisplay(){
    display.value = "";
}

// Evaluates the expression in the display using Function constructor for security
// Example: new Function('a', 'b', 'return a + b') creates a function that adds two numbers
function calculate(){
    try {
    const result = Function('"Use strict"; return (' + display.value + ')')();
    display.value = result;
    } 
    catch(error) {
        display.value = "Error"
    }
}
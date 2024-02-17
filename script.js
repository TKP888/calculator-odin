const display = document.getElementById('display');
let storedNumber = '';
let currentNumber = '';
let selectedOperation = '';

// event listener for input
document.addEventListener('click', function(event) {
    const buttonText = event.target.textContent;
    if (!isNaN(buttonText) || buttonText === '.') {
        appendNumber(buttonText);
    } else if (event.target.id === 'clear') {
        clearDisplay();
    } else if (event.target.id === 'undo') {
        undo();
    } else if (event.target.id === 'equals') {
        calculate();
    } else {
        handleOperation(buttonText);
    }
});

// append number to display
function appendNumber(number) {
    currentNumber += number;
    display.textContent = currentNumber;
}

// maths operations function
function handleOperation(operation) {
    if (currentNumber !== '') {
        if (storedNumber === '') {
            storedNumber = currentNumber;
        } else {
            calculate();
        }
        selectedOperation = operation;
        currentNumber = '';
    }
}

//calculation functions
function calculate() {
    let result;
    switch (selectedOperation) {
        case '+':
            result = parseFloat(storedNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(storedNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(storedNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(storedNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    display.textContent = result;
    storedNumber = result.toString();
    currentNumber = '';
    selectedOperation = '';
}

// clear display and reset
function clearDisplay() {
    display.textContent = '0';
    storedNumber = '';
    currentNumber = '';
    selectedOperation = '';
}
//removes previous button press from display
function undo() {
    currentNumber = currentNumber.slice(0, -1);
    display.textContent = currentNumber;
}
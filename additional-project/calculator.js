let start = alert("Welcome to the calculator program!");
console.log(start);
let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, **, %, /):");

switch (operation) {
    case "+":
        console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
        break;
    case "-":
        console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);      
    break;
    case "*":
        console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        break;
    case "/":
        if (secondNumber === 0) {
            console.log("Error: Division by zero is not allowed.");
        } else {
            console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
        }
        break;
    case "**":
        console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
        break;
    case "%":
        console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
        break;
    default:
        console.log("Invalid operation. Please enter +, -, *, **, %, or /.");
}
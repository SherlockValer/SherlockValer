let a = prompt("First number :");
let numa = parseInt(a);
if (isNaN(numa)) {
    alert("That's not a valid number");
};


let b = prompt("Second number :");
let numb = parseInt(b);
if (isNaN(numb)) {
    alert("That's not a valid number");
};


let c = prompt("Operator :");
if (c != "+", "-", "*", "/"){
    alert("Please enter a valid operator from +, -, *, /");
}
let d;
if (c == "+") {
    d = numa + numb;
    alert("Sum is " + d);
} else if (c == "-") {
    d = numa - numb;
    alert("Subtraction is " + d );
} else if (c == "*") {
    d = numa * numb;
    alert("Multiplication is " + d);
} else if (c == "/") {
    d = numa / numb
    alert("Division is " + d);
}

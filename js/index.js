// Lecture-2 => Task-1


// // Input: 
// var a = parseFloat(prompt("Enter the value of a: "));
// var b = parseFloat(prompt("Enter the value of b: "));

// // Arigthmatic operations:
// var addition = a + b;
// var subtraction = a - b;
// var multiplication = a * b;
// var division = a / b;
// var modulus = a % b;

// // Output:
// document.write(`${a} + ${b} = ${addition}`+'<br>');
// document.write(`${a} - ${b} = ${subtraction}`+'<br>');
// document.write(`${a} * ${b} = ${multiplication}`+'<br>');
// document.write(`${a} / ${b} = ${division}`+'<br>');
// document.write(`${a} % ${b} = ${modulus}`);


// Lecture-2 => Task-2


// var shape = prompt("Enter the shape (circle, square, rectangle, triangle):").toLowerCase();

// if (shape === 'circle') {
//     var radius = parseFloat(prompt("Enter the radius of the circle: "));
//     var area = Math.PI * radius * radius;
//     document.write("Area of the circle is: " + area);
// } 
// else if (shape === 'square') {
//     var side = parseFloat(prompt("Enter the side length of the square:"));
//     var area = side * side;
//     document.write("Area of the square is: " + area);
// } 
// else if (shape === 'rectangle') {
//     var length = parseFloat(prompt("Enter the length of the rectangle:"));
//     var width = parseFloat(prompt("Enter the width of the rectangle:"));
//     var area = length * width;
//     document.write("Area of the rectangle is: " + area);
// }
// else if (shape === 'triangle') {
//     var base = parseFloat(prompt("Enter the base length of the triangle:"));
//     var height = parseFloat(prompt("Enter the height of the triangle:"));
//     var area = (1 / 2) * base * height;
//     document.write("Area of the triangle is: " + area);
// }  
// else {
//     console.log("Invalid shape entered.");
// }


// Lecture-2 => Task-2 :

// var temperature = parseFloat(prompt("Enter the temperature:"));
// var scale = prompt("Enter the scale (F for Fahrenheit, C for Celsius):").toUpperCase();

// var convertedTemperature;

// if (scale === 'F') {
//     convertedTemperature = (temperature - 32) * (5 / 9);
//     document.write("Converted temperature in Celsius: " + convertedTemperature.toFixed(2) + "°C");
// } 
// else if (scale === 'C') {
//     convertedTemperature = (temperature * 9 / 5) + 32;
//     document.write("Converted temperature in Fahrenheit: " + convertedTemperature.toFixed(2) + "°F");
// } 
// else {
//     document.write("Invalid scale entered.");
// }   


// Lecture-3 => Task-1 :


var mark = parseInt(prompt("Enter the mark: "));

var grade;

if (mark >= 80) {
    grade = 'A';
} else if (mark >= 70) {
    grade = 'B';
} else if (mark >= 60) {
    grade = 'C';
} else if (mark >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}

document.write("The grade is: " + grade);

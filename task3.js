// 3. Из п.2 реализовать функции sum, div, multiply, power
//     doFunction(16, -23, mul); // 16*(-23)

function doFunction(a, b, power) {
    return power(a, b);
}
function sum (a, b) {
    return a + b;
}
function div (a, b) {
    return a / b;
}
function multiply (a, b) {
    return a * b;
}
function power(a, b) {
    return  Math.pow(a, b);
}
document.writeln(doFunction(16,-23, sum) + "<br>");
document.writeln(doFunction(16,-23, div) + "<br>");
document.writeln(doFunction(16,-23, multiply) + "<br>");
document.writeln(doFunction(16,-23, power) + "<br>");
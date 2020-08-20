// 4. Из п.2, если количество числовых аргументов равно единице  и переданная функция
//     factorial - реализовать расчет факторикала.
//     doFunction(6, factorial);
//     в ответе поулчаем 6! = 720. // arguments.length и typeof

function doFunction(a, b, power) {
    console.log(arguments.length);
    if (arguments.length === 2 && arguments[1].name === "factorial") {
        return factorial (arguments[0]);
    }
    return power(a, b);
}
function power(a, b) {
    return  Math.pow(a, b);
}
function factorial (a) {
        if (a === 1){
        return 1;
    } else {
            return a * factorial(a - 1);
        }
}
document.writeln(doFunction(2,3, power) + "<br>");
document.writeln(doFunction(6, factorial) + "<br>");
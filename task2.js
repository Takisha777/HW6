// 2. Написать функцию, которая получает 3 аргумента: два числа и функцию.
//     Произвести вызов переданной функции с двумя аргументами числами.
//     doFunction(2, 3, power); в ответе должны получить 8, как 2 в степени 3.

function doFunction(a, b, power) {
    return power(a, b);
}
function power(a, b) {
     return  Math.pow(a, b);
}
document.writeln(doFunction(2,3, power));

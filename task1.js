// 1. Функция должна вернуть массив из центральных элементов переданных массивов.
//     Центральный элемент, это один центральный, если массив по длине непарный
//     [1, 2, 3, 4, 5] -> 3
//     Центральный элемент, это пара центральных, если массив по длине парный:
//     [1, 2, 3, 4, 5, 6] -> 3, 4
//     calculate([1, 2, 3], [1, 2], [3, 4, 5], …);

function calculate() {
    let arrUser = [], newArrUser = [];
    debugger;
    for (let i = 0; i < arguments.length; i++){
        arrUser[i] = arguments[i];
            if (arrUser[i].length % 2 === 0){
                newArrUser.push(arrUser[i][arrUser[i].length / 2 -1]);
                newArrUser.push(arrUser[i][arrUser[i].length / 2]);
            } else {
                let x = Math.floor(arrUser[i].length / 2);

                newArrUser.push(arrUser[i][x]);
        }
    }
    document.writeln(newArrUser + "<br>");
}
calculate([1, 2, 3], [1, 2], [3, 4, 5], [6,7,8,9,0],[0], [33,44,55,66]);
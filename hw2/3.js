/*Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье.
 Данная функция должна обязательно содержать проверку входных параметров, потому
  что принимать она может только числа.*/
var fun = function (a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error("we need  a number here!");
    } else {
        return console.log(a - b / c);
    }
}
console.log(fun(6, 4, 3));
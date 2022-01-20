/*Сделайте функцию `isEven()`, которая параметром 
принимает целое число и проверяет: чётное оно или нет. 
Если чётное — функция возвращает `true`, если нечётное — `false`.
 Данная функция должна обязательно содержать проверку входного параметра,
  потому что принимать она может только число.

*Чётные числа могут делится на 2 без остатка.**/

const isEven = function (a) {
    if (typeof a !== 'number') throw new Error("we need  a number here");
    return a % 2 === 0;
}

console.log(isEven(900))
/* Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает 
массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.*/


const getDivisors = function (a) {
    if (typeof a !== 'number') throw new Error("we need  a number here");
    let divisors = [];
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) divisors.push(i);
    }
    return divisors;
}

console.log(getDivisors(18));
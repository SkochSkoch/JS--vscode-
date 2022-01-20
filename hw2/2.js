/**Напишите функцию `f` которая возвращает сумму всех параметров.
 *  Количество параметров может быть любым. Данная функция должна
 *  обязательно содержать проверку входных параметров, потому что принимать она может только числа. */
var fun = function (a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error("we need  a number here!");
    } else {
        return (a + b + c);
    }
}
console.log(fun(1, 173, 3));
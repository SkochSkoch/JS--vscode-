/*####Задача 2

Создать АНАЛОГ функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});  */ //

const arr = [1, 2, 3];
const filter = function (arr, func) {
    if (!Array.isArray(arr)) throw new Error("we need  array here");
    if (typeof func !== 'function') throw new Error(" Element 2 must be a function here");
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) {
            result.push(arr[i]);
        }
    }
    return result;
}

function func (item, i, arr) {
    return item % 2 === 0;
}


const res = filter(arr, func);
console.log(res);


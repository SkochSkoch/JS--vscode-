/* Создать АНАЛОГ функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {}); */ 

const arr = [8, 2, 4, 7];
const every = function (arr, func) {
    if (!Array.isArray(arr)) throw new Error("we need  array here");
    if (typeof func !== 'function') throw new Error(" Element 2 must be a function here");
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === false) {
            return false;
        }
    }
    return true;
}

function func (item, i, arr) {
    return item % 2 === 0;
}


const res = every(arr, func);
console.log(res);

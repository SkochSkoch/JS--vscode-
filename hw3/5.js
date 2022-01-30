/*Создать АНАЛОГ функции `reduce`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);*/



const arr = [8, 2, 4, 7];

const reduce = function (arr, func, acc) {
    if (!Array.isArray(arr)) throw new Error("we need  array here");
    if (typeof func !== 'function') throw new Error(" Element 2 must be a function here");
    if (typeof acc !== 'number' && acc !== 'string') throw new Error(" Element 3 must be a number or string");
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i], i, arr);
    }
    return acc;
};

function func(acc, item, i, arr) {
    return acc + item;
}


const res = reduce(arr, func,0);
console.log(res);



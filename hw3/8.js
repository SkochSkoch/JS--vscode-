/*Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.

Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и не массив

```javascript
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3*/

const array = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
const log = console.log;

function f(arr) {
    if (!Array.isArray(arr) && typeof arr !== 'number') throw new Error('Error: 1st argument must be an array or number');

    if (typeof arr === 'number') {
        return arr;
    } else {
        if (arr.length === 0) return 0;
        if (arr.length === 1) return f(arr[0]);
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result = result + f(arr[i]);
        }
        return result;
    }
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
log(f(arr)); // 12
const arr2 = [[[[[1, 2]]]]];
log(f(arr2)); // 3
const arr3 = [[[[[1, 2]]], 2], 1];
log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
log(f(arr4)); // 0
const arr5 = [[[[[], 3]]]];
log(f(arr5)); // 3
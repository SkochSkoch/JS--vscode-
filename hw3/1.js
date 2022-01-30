/* Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});*/


const arr = [1, 2, 3];
const forEach = (arr, cb) => {
    if (!Array.isArray(arr)) throw new Error("we need  array here");
    if (typeof cb !== 'function') throw new Error(" Element 2 must be a function here");
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}
forEach(arr, function(item, i, arr) {
    console.log(item + i);
});

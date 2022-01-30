/* Создать АНАЛОГ функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]*/

const reverse = function (arr) {
    if (!Array.isArray(arr)) throw new Error("we need  array here");
    if (arr.length === 0) throw new Error("Array is empty");
    let temp = arr.slice(0);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[arr.length - 1 - i];
    }
    return arr;
}
const arr = [1,2,3,4,5,6,7,8,9,10];
reverse(arr);
console.log(arr);
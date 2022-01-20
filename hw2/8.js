/* Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`,
 которая принимает данный массив в качестве параметров, 
 а затем последовательно выводит на экран его элементы.
  Обязательно нужно использовать рекурсию. Использовать цикл запрещено.
   Данная функция должна обязательно содержать проверку входного параметра,
    потому что принимать она может только не пустой массив.

*Возможно вам понадобится метод [splice](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).*

```js
f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty*/

const arr = [1, 2, 3];

const fun = function (f) {
    if (!Array.isArray(f)) throw new Error("we need  array here");
    if (f.length === 0) throw new Error("we need  not an empty array here");
    console.log(f.shift());
    if (f.length === 0) return;
    fun(f);
}

fun([1, 2, 3]);
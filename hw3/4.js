const arr = [8, 2, 4, 7];
const some = function (arr, func) {
    if (!Array.isArray(arr)) throw new Error("we need  array here");
    if (typeof func !== 'function') throw new Error(" Element 2 must be a function here");
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) {
            return true;
        }
    }
    return false;
}

function func(item, i, arr) {
    return item % 2 === 0;
}


const res = some(arr, func);
console.log(res);
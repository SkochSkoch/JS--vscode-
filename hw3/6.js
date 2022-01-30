const arr = [8, 2, 4, 7];

const reduceRight = function (arr, func, acc) {
    if (!Array.isArray(arr)) throw new Error("we need  array here");
    if (typeof func !== 'function') throw new Error(" Element 2 must be a function here");
    if (typeof acc !== 'number' && acc !== 'string') throw new Error(" Element 3 must be a number or string");
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = func(acc, arr[i], i, arr);
    }
    return acc;
};

function func(acc, item, i, arr) {
    return acc + item;
}


const res = reduceRight(arr, func, 0);
console.log(res);

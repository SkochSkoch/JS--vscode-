//Отсортировать массив по убыванию.
var arr = [1,2,3,4,5,6];
for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] < arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            wasSwap = true;
        }
    }
    if (!wasSwap) break;
}   
console.log(arr) ;
;
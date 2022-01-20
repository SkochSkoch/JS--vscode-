
var fun = function (f) {
    if (typeof f !== 'number') {
        throw new Error("we need  a number here!");
    } else {
        return (f ** 3);
    }
}
console.log(fun(12));

var source = [1, 2, 3, 4, 5, 6, [1, 2]];
var test = source.flat();
var test2 = test.flat();
console.log(test);
console.log("test2: " + test2);
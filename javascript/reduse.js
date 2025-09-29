var arr = [1, 2, 3, 4, 5]; 

var sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
},1000);

console.log(sum);

var arr2 = [10, 20, 30, 40];
var product = arr2.reduce(function(accumulator, currentValue) {
    return Math.min(accumulator, currentValue);
}, );
console.log(product);
var arr = [23, 45, 67, 89, 12];
var newArr = arr.map(function(value, index, array) {
    return value + 10;
}); 
console.log(newArr); 
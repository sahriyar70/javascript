var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var found = arr.find(function(value) {
    return value === 100; 
});

console.log(found);

var users = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 35}
]; 
var user = users.findIndex(function(user) {
    return user.name === 'Charlie'; 
});
console.log(user);
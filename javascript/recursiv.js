function ricu(n) {
    if (n <= 1) {
        return 1;
    } else {
        
        console.log('sahriayar');
        
        return n * ricu(n - 1);
    } 
}
ricu(5);

function sum (n) {
    return n <= 1 ? 1 : n + sum(n - 1);
}
console.log(sum(5)); 
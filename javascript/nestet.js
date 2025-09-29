var x = 44 

function outer() {
    var y = 55;
    
    console.log(x, y,);
       
    function inner() {
        var z = 66;
         console.log(z);
    } 
    
    inner();}
     
outer();
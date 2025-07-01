// Sum of n Natural Numbers
var Pr = prompt('Enter a Number.')
if (Pr === null) {
    console.log('Cancelled');
    
} else {
    let n = Number(Pr);
    if (isNaN(n)) {
        console.log('Invalid Input');
        
    } else {
        if (n > 0) {
            var sum = 0;
            for(var i = 0; i <= n; i++) {
                sum = sum + i
                
            }
            console.log(sum);
           
            
        } else {
            
             console.log('Number should be Positive and Greater than 0');
        }
    }

}



let age = Number(prompt("What is your age?"));
if (isNaN(age)) {
    console.log('Wrong input');
    
}else if (age >= 18) {
    console.log('Access Granted');
    
} else {
    console.log('You are under age. Access Denied');
    
}
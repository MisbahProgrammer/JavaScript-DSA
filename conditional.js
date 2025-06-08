// // This program calculates age restriction, if age is 18+ or less
let age = Number(prompt("What is your age?"));
if (isNaN(age)) {
    console.log('Wrong input');
    
}else if (age >= 18) {
    console.log('Access Granted');
    
} else {
    console.log('You are under age. Access Denied');
    
}
// This program calculates Discounts and tell payable amount by input total amount
let amount = prompt('Enter your total Bill to apply discount')
let Discount = 0;
if (amount >= 0 && amount <=2000 ) {
    alert(Discount)
    
} else if(amount > 2000 && amount <= 3000) {
 Discount = 10
} else if(amount > 3000 && amount < 5000){
    Discount = 20
    
}
console.log(amount - Math.floor((Discount*amount)/100));
// // This program will calculate Your electricity bill by input total units consumed
let Units = Number(prompt('Enter your total units'));
let Bill = 0;
if (Units > 400) {
    (Units - 400) * 13
   Units = 400 
}
if (Units > 200 && Units <= 400) {
   Bill  += (Units - 200) * 8
    Units = 200
}
if (Units > 100 && Units <=200) {
    Bill += (Units - 100) * 6
    Units = 100
}
amount += Units * 4
console.log(Bill);

// This Program Calculates Number of Notes present in your Amount

let Cash = Number(prompt('Enter Amount'));
if (Cash >= 5000) {
    console.log('5000 Notes :' + Math.floor(Cash/5000));
    Cash = Cash% 5000
}
if (Cash >= 1000 && Cash < 5000) {
    console.log('1000 Notes :' + Math.floor(Cash/1000));
    Cash = Cash% 1000
}
if (Cash >= 500 && Cash < 1000) {
    console.log('500 Notes :' + Math.floor(Cash/500));
    Cash = Cash% 500 
}
if (Cash >= 100 && Cash < 500) {
    console.log('100 Notes :' + Math.floor(Cash/100));
    Cash = Cash % 100
}
if (Cash >= 50 && Cash < 100){
    console.log('50 Notes :' + Math.floor(Cash/50));
    Cash = Cash% 50
}
if (Cash >= 20 && Cash < 50){
    console.log('20 Notes :' + Math.floor(Cash/20));
    Cash = Cash% 20
}
if (Cash >= 10 && Cash < 20){
    console.log('10 Notes :' + Math.floor(Cash/10));
    Cash = Cash% 10
}
if (Cash < 10) {
    console.log(Cash);
    
}

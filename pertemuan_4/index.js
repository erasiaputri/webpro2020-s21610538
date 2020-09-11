/*
    1. Function
*/

/*
    It is a sub-program or sub-routine that we call into another part of the program
    It's the basic structure of the JavaScript
    Also known as a procedure -> something used to do 1 certain task or count the results of a value.
    To use the function, we gotta create a function before calling it.
*/

// let a = 8;
// let b = 3;

// let LuasA = a*a;
// let LuasB = b*b;

// let total = LuasA + LuasB;
// console.log(total);

// const hasil = penjumlahanDuaBujurSangkar(8,3));
// console.log(hasil);

//or
//const hasil = penjumlahanDuaBujurSangkar(8,3);
//console.log(hasil);

//function declaration
function penjumlahanDuaBujurSangkar (a,b){
    return a*a + b*b;
}

console.log(penjumlahanDuaBujurSangkar(8,3));
console.log(penjumlahanDuaBujurSangkar(10,5));

//new example for addition and multiplication
function tambah(a,b){
    return a + b;
}
function kali(a,b){
    return a*b;
}
console.log(tambah(kali(5,2),kali(10,2)));


//function expression
const penjumlahanDuaBujurSangkar = function (a,b){
    return a*a + b*b;
}

console.log(penjumlahanDuaBujurSangkar(8,3));
console.log(penjumlahanDuaBujurSangkar(10,5));



 
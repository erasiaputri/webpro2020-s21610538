/*
    DASAR DASAR PEMOGRAMAN JAVASCRIPT
    1. Variable dan tipe data
    2. Operator
    3. Array
    4. Object
    5. Fungsi
    6. JavaScript Conditional
    7. JavaScript Loop
*/
//=============================================

/*
    1. Variable dan tipe data
*/
const firstName = "John";
let age = 20;
age = 21;
const isMarried = true;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(age + " " + isMarried);

const info = "My name is" + firstName + ", I'm " + age + "years old." + isMarried;
console.log(typeof info);

/* 
    2. Operator
*/
let bilangan = 10;
console.log(bilangan == "10"); //loose equality
console.log(bilangan === "10"); //strict equality

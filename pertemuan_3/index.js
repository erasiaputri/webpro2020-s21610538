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
const firstName = "John"; //unchangeable tipe data used
let age = 20; //changeable tipe data used
age = 21;
const isMarried = true; // Boolean true/false


//Using the typeof will show the data type in the console. - or you can say to know the data type

console.log(typeof firstName); // string is white klo muncuk di console
console.log(typeof age); // integer & Boolean is blue klo muncul di console
console.log(typeof isMarried); //muncul tipe datanya
console.log(age + " " + isMarried);

//Not using the typeof will show the result/output in the console.
console.log(firstName);
console.log(age);
console.log(isMarried);

//We can put this like below to make the console easier to console.log
const info = "My name is" + firstName + ", I'm " + age + "years old." + isMarried;
console.log(typeof info); // this one shows the data type of info
console.log(info); // this one shows the result/output in the console.

/* 
    2. Operator
*/
let bilangan = 10;
console.log(bilangan == "10"); //loose equality
// Doesnt really have to be exactly the same because it can change too.

console.log(bilangan === "10"); //strict equality
// Has to be exactly the same; it is very strict with the conditions using triple equals.
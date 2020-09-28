//Arrow Function

//Using the Arrow Function ES5
// function addition(a, b){
//     return a + b;
// };

//Using the Arrow Function ES6
//Using Parameter
// const addition = (a, b) => {
//     let total =  a + b;
//     return total;
// }
// console.log(addition(5,5)); //call the function afterwards
//Output: 10


//Contoh:
//No Parameters
// const myName = () => {
//     const name = `Putri`;
//     return name;
// }

// console.log(myName()); //Still put in the () but empty even tho no parameters
//Output: Putri

//Implicit Return Value ES5
//Example:
// function greeting(occasion, name) {
//     return `${occasion} ${name}`;
// };

//Implicit Return Value ES6
//Using Parameters
// const greeting = (occasion, name) => `${occasion} ${name}`;

// console.log(greeting("Good Morning", "Putri"));
//output: Good Morning Putri

//No Parameters
// //Simply:
// const name = () => `Putri`;
// console.log(name());
// Var, Let, Const

// var nama = "Putri";
// var nama = "Kloah";

// console.log(nama);
// //All with  {} is equals to a block

// let nama = "Putri";
// let nama = "Kloah";

// console.log(nama);

//Scope dalam Javascript
// 1. Function scope (var)
// 2. Block Scope (let, const)

for(var i = 0;i < 10; i++){         //bersifat local
    console.log(i);
}
console.log(i);

//if another case like this
function tes (){
    for(var i=0;i<10;i++){
        console.log(i);
    }
}
//call the function
tes(); 
//you cant console.log(i);
//it turns out Error


//IIFE
(function tes(){                    //scope let itu adalah block
    for (var i = 0; i < 10; i++){   //this examples turns out to UNCAUGHT REFERENCEERROR
        console.log(i);             //Where the i is not defined
    }                               //How to fix this?
}) ();                              //We use 'let' karena var tidak bisa
console.log(i);

//so the we change it to:
//Use 'let'
(function tes(){                    //Scope lebih luas = global
    for (let i = 0; i < 10; i++){  
        console.log(i);            
    }                              
}) ();                             
console.log(i);

let i;
for (i = 0; i < 10; i++){
    console.log(i);
}
console.log(i);

//Template Literal
const person = {
    firstName: "Putri",
    lastName: "Kloah",
    age: 21,
};

//How we normally join using the "" and  + 
console.log("Hello, I am " + person.firstName + " " + person.lastName + ". I'm " + person.age + "years old.");

//How we apply ES6:
//We use the Backtick `` and ${`for the object`}
console.log(`Hello, I am ${person.firstName} ${person.lastName}. I'm ${person.age} years old.`);


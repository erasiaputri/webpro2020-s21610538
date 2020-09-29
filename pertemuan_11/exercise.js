//Exercise
//Convert to ES6 Syntax

// function yearUntilRetirement (year, firstName){
//     var age = 28;
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + " retired in " + retirement + "years");
//     }else{
//         console.log(firstName + " is already retired.");
//     }
// }

//ES6
const yearUntilRetirement = (year, firstName) => {
    let age = 2020 - year;
    let retirement = 65 - age;
    if (retirement < 66) {
        return (`${firstName} retired in ${retirement} years`);
    }else{
        return (`${firstName} is already retired.`);
    }
};

console.log(yearUntilRetirement(1999,`Putri`));
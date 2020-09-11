/*
    1. Conditional: If-else if-else
*/

// let attitude = "ambitious";

function hogwartsHouse(attitude){

    if (attitude == "brave"){
    return "You're a Griffindor"; 
    }
    else if(attitude == "studious"){
    return "You're a Ravenclaw";
    }
    else if(attitude == "loyal"){
    return "You're a Hufflepuff";
    }
    else if(attitude == "ambitious"){
    return "You're a Slytherin";
    }
    else{
    return "You're a Muggle";
    }
}

console.log(hogwartsHouse("brave"));
console.log(hogwartsHouse("ambitious"));

/*
    2. Conditional: Switch Case
*/

let schedule;
let day = "Thursday";

switch(day){
    case "Monday " && "Wednesday":
        schedule = "Math, English, Science";
        break;
    case "Tuesday" && "Thursday":
        schedule = "Social, Computer, Arts";
        break;
    case "Friday":
        schedule = "No class";
        break;
    default:
        schedule = "It's the weekend";
}

console.log(schedule);

/*
    3. Loop: For
*/

for(i=0 ; i<10;i++){
    console.log(i);
}

/*
    4. Loop: For/In/of
*/

const movie = {
    movieName: "Monsters University",
    movieDuration: "2 hours"
};

for (let find in movie){
    console.log(find + ": "+ movie[find])
}

/*
    5. Loop: While
*/

 let number = 10
    while(number<=18){
        console.log(number);
        number++;
    }

/*
    6. Loop: Do-While
*/

let digit = 1
do{
    console.log(digit);
    digit++;
    }
while(digit<=10);





    
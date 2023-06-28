//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let qwerty = [];

for (key in person3) {
    let lst = [];
    lst.push(key);
    // adds keys to lst
    lst.push(myObject[key]);
    // adds values to lst
    qwerty.push(lst);
}
console.log(qwerty);

// for(let i = 0; i < person3.keys(pizza, tacos, burgers ).length; i++){
//     console.log(person3.keys(person2)[i])
// }


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

function countBy(x, n) {
    let z = [];
    // create emt array to put into
    for ( let i = 1; i <= n; i++) {
    // looping formula
      z.push(x * i);
    //   adds then multiplies
    }
    return z;
  }

//   https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript


// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let ansFunc = '';
    // create emt string to join into
    for (let i = 1; i <= num; i++){
        // looping formula, loops until num is reached
      ansFunc += i.toString() + ' sheep...'
    }
    // the input is a number so I turn it into a string 
    return ansFunc;
  }

//   https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }
//   like this one
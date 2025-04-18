/*
If you want to read more description check this link : https://longing-swamp-5af.notion.site/JavaScript-19ed0bd3751d807f8472e45ae06293a2
*/

// in javascript, we declare variables using var, let, and const

// var
// let
// const

// 1. var - old way function-scoped

var naam = "Pardeep";
naam = "rahul";
console.log(naam);

let age = 25;
age = 355;
console.log(age);

const country = "India";
console.log(country); // Output: India

function testVar() {
  if (true) {
    var x = 10; // var is function-scoped
  }
}

function testlet() {
  if (true) {
    let y = 20; // let is block-scoped
  }
}
testVar();
testlet();

const input = require('readline-sync');
let baseInput = input.question("What is the base of the triangle? \n");
let hightInput = input.question("What is the height of the triangle? \n");

const triArea = (base,hight) => {return base*hight/2};

console.log(triArea(baseInput, hightInput));
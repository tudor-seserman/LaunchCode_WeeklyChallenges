const input = require('readline-sync');
let number = Number(input.question("What number would you like to sum up? \n"));



function addUp(number, sum = 1){
  if(number === 1){
    return sum;
  }else{
    return addUp(number-1, sum + number)
  }
}


console.log(addUp(number));
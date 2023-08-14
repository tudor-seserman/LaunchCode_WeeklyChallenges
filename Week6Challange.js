// function charCount(char, phrase){
//   let splitPhrase = phrase.split(char);
//   return splitPhrase.length-1;
// }

function charCount(char, phrase){
  return (phrase.match(new RegExp(char, "g"))||[]).length;;
}



console.log(charCount("e", "edabit"));
//1 

console.log(charCount("c", "Chamber of secrets"));
//1

console.log(charCount("b", "big fat bubble"));
//4
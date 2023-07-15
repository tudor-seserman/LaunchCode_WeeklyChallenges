function LongestWord(sen) { 
  const words = sen.split(" ")
  words.sort((a,b)=>{return b.replace(/\W/g, '').length - a.replace(/\W/g, '').length})
  
  // code goes here  
  return words[0]; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));

// This assumes that words can be a mixture of letters and nonletters, 
// and only measures the length of the sentences in letters. 
// You could also filter out non words and only sort the the proper words.
// You could also trim the words where the are joined with something else before filtering.
// Instructions are unclear as to how to handle mixed words and didn't sign up for an account.
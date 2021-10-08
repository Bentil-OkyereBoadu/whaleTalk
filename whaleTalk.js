let input = 'identical';
const vowels = ['a', 'e', 'u', 'o', 'i'];
let resultArray = [];
for(let i = 0; i < input.length; i++){
  for (let index = 0; index < vowels.length; index++){

  //comparing vowels elements with input and storing identical ones in resultArray
    if (vowels[index] === input[i]){ 
      resultArray.push(vowels[index]);
    }
   } 
//to make 'e' and 'u' double letters
   if(input[i] === 'e' || input[i] === 'u'){
     resultArray.push(input[i]);
  }
}
//joining resultArray elements and convert to uppercase
console.log(resultArray.join('').toUpperCase());

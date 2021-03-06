/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/


 // function isVowel(char){
 //  var charNormalized = char.toLowerCase()
 //  if(
 //    charNormalized === 'a' ||
 //    charNormalized ==='e' ||
 //    charNormalized === 'i' ||
 //    charNormalized === 'o' ||
 //    charNormalized === 'u' ||
 //    charNormalized === 'y'
 //  ){
 //    return true
 //  } else {
 //    return false
 //  }
 // }


 function isVowel(letter) {
   let resultado = false

 let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' 'y'];

  vocales.forEach(function (elemento) {

    console.log(elemento, letter);
    if (letter === elemento) {
      // console.log(letter);
      // console.log(elemento);
      // console.log('******', true);
      resultado = true

      // return true
    }
  })
  console.log(resultado);
  return resultado

 }

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function accepts string input
//    and returns boolean true if it is a vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 1 ====");
console.assert(isVowel('a') === true);
console.assert(isVowel('e') === true);
console.assert(isVowel('i') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('u') === true);
console.assert(isVowel('y') === true);
 //(of course, 'y' is a vowel!!)

/*-------------------TEST-2-------------------------*/
// function receives string input
//    and returns boolean false if it is NOT a vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 2 ====");

console.assert(isVowel('x') === false);
console.assert(isVowel('n') === false);

/*-------------------TEST-3-------------------------*/
// function will return true if passed
//   an uppercase vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 3 ====");
console.assert(isVowel('A') === true);
console.assert(isVowel('E') === true);
console.assert(isVowel('U') === true);

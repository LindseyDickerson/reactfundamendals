// Challenge
/*
Create 3 conditional operators to check the type of a variable.
string vs number vs undefined

string
number
boolean 
console.log "its a string, boolean, this is a number"
*/

let planted = true;
if (planted) {
    console.log(typeof planted);
};


let planted = 'Roses are red';
if (planted) {
    console.log(typeof planted);
};

let boquet = 10;
if (boquet) {
    console.log(typeof boquet);
};



// Submission for the 2nd repl challenge
let favMovie = {
    nameOfMovie: "The Wizard of Oz",
    runTime: 101,
    characters: [
        { name: "Dorothy",
      age: 14,
      items: [ {itemOne: "Ruby slippers"}, { itemTwo: "Basket" }]},
      {
      name: "Scarecrow",
      age: 30,
      items: [ {itemOne: "Brain"}, {itemTwo: "Straw" }] }
    ],
    genre: "Musical"
  };
  console.log(favMovie.nameOfMovie);
  console.log(favMovie.runTime);
  console.log(favMovie.characters);
  console.log(favMovie.characters[0].name);
  console.log(favMovie.characters[0].items[0].itemOne);
  /* Output: 
  The Wizard of Oz
101
[ { name: 'Dorothy', age: 14, items: [ [Object], [Object] ] },
  { name: 'Scarecrow', age: 30, items: [ [Object], [Object] ] } ]
Dorothy
Ruby slippers */


/*********************************
 * Pig Latin Challenge
 *  Challenge (Strings):
Pig Latin:
Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.
If able to do so, return the value into another variable and print that variable
What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/

// function pigLatinOne() {
//   let challenge = 'Doctor Pepper is the best soda.';
//   let superChallenge = 'Octorday Epperpay isay ethay estbay odasay.';
//     console.log(challenge, superChallenge);
// }
// pigLatinOne();

function pigLatinTwo() {
  let english = 'Doctor pepper is the best soda.';
  let igpayAtinlay = 'Octorday Epperpay isay ethay estbay odasay.';

  console.log(english);
  console.log(igpayAtinlay);
  return english, igpayAtinlay;
 }
pigLatinTwo();

function pigLatin(latin) {
 let latinPig = '';
 for (let l in latin) {
   if (l == "a", "e", "i", "o", "u") {
     latinPig += latin
   }
 }
}

/****************************************************************************
Challenge (Arrays):
Color List:
Create a function that can take in arrays.
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)
In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.
Not to make it too hard on yourself, you can stop the count at ten
**************
solution!*/

let colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'white', 'black', 'magenta', 'teal'];
let suffArr = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];

function colorFunc(colorArray, suffixArray) {
  colorArray.forEach((element, index) => {
    console.log(`${index + 1}${suffixArray[index]} is ${element}.`);
  })
};
colorFunc(colors, suffArr)

/* output: 
1st is red.
2nd is blue.
3rd is yellow.
4th is green.
5th is purple.
6th is orange.
7th is white.
8th is black.
9th is magenta.
10th is teal.
 */

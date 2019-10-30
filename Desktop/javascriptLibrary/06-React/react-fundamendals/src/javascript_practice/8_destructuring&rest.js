//Destructuring & Rest

const array = ['thing', 42, false, {key: 'value'}, [1,2,3,4,undefined], NaN];

let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length -1];

console.log(stringVar, numVar, objVar, nanVar); //output: thing 42 { key: 'value' } NaN

let [string, num,, obj,, nan] = array;
console.log(string, num, obj, nan); //output: thing 42 { key: 'value' } NaN

//Spread operator

let newArr = ['a', 1, undefined, ...array];
console.log(newArr);
/* output: 
[ 'a',
  1,
  undefined,
  'thing',
  42,
  false,
  { key: 'value' },
  [ 1, 2, 3, 4, undefined ],
  NaN ]
  */

  const testObj = {
      string: 'stringy thingy',
      num: 23,
      bool: true,
      obj: {key: 'waluigi'},
      arr: [1,2,3,4, undefined],
      nan: NaN
  }

  const stringVar = testObj.string;
  const numVar = testObj.num;
  const objVar = testObj.obj;
  const nanVar = testObj.nan;

  //console.log(stringVar, numVar, objVar, nanVar);
  //output: stringy thingy 23 { key: 'waluigi' } NaN

  let {string, obj, num, nan}= testObj;
  //console.log(string, num, obj, nan);
  //output: stringy thingy 23 { key: 'waluigi' } NaN

  let newObj = {test: 'blah', newThang: 'other thing', ...testObj};
  console.log(newObj);
  /* output: 
  { test: 'blah',
  newThang: 'other thing',
  string: 'stringy thingy',
  num: 23,
  bool: true,
  obj: { key: 'waluigi' },
  arr: [ 1, 2, 3, 4, undefined ],
  nan: NaN }
  */
//Interpolation

const username = 'Kenn';
console.log(`${username} is the true JS Wizard!`);
//Kenn is the true JS Wizard!

//Template literals - breaks things into more than one line, handy with HTML.

console.log(`Hey students,
What bugs can
${username}
fix
for you today?`);

/*
Hey students,
What bugs can
Kenn
fix
for you today?
*/

//It is very common to see interpolation with an object in React.
const person = {
    username: 'Kenn',
    profession: 'Secret Agent'
}
console.log(`${person.username}, ${person.profession}, extrodinaire.`); //Kenn, Secret Agent, extrodinaire.
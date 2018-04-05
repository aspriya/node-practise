// var obj = {
//   name: "Ashan",
//   birthday: [1991, 6, 28]
// }
//
// var strObj = JSON.stringify(obj);
// console.log(typeof strObj);
// console.log(strObj);
//
// var personString = '{"name": "Ashan", "birthday": [1991, 6, 28]}';
// var person = JSON.parse(personString);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: "Some title",
  body: "Some body"
}

originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);

const fs = require('fs');

var fetchNotes = () => {
  try{
    return JSON.parse(fs.readFileSync('notes-data.json'));
  }catch(e){
    return [];
  }
}

var saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  }

  var duplicateNotes = notes.filter(nt => nt.title === title);
  // .filter method, takes one at a time from the array and pass it to the anonymous function within it.
  //In above, those one at a time passing elements are accessed via a variable called 'nt'.

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var getAll = () => {
  return fetchNotes();
}

var readNote = title => {
  var notes = fetchNotes();
  var note = notes.filter(nt => nt.title === title);
  return note[0];
}

var removeNote = title => {
  var notes = fetchNotes();
  var newNotesArray = notes.filter( nt => nt.title !== title);
  saveNotes(newNotesArray);

  return notes.length !== newNotesArray.length;
}

var logNote = note =>{
  debugger;
  console.log(`Note title : ${note.title}`);
  console.log(`Note body : ${note.body}`);
}
module.exports = {
  addNote: addNote,
  getAll: getAll,
  readNote: readNote,
  removeNote: removeNote,
  logNote: logNote
}

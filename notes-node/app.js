const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
var bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs
.command('add', 'Add a new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {title: titleOptions})
.command('remove', 'Remove a note', {title: titleOptions})
.help()
.argv;
var command = argv._[0];

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(typeof note != 'undefined'){
    notes.logNote(note);
  }else{
    console.log("A note with same title already exist!");
  }
}else if(command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Listing ${allNotes.length} note(s).`);
  allNotes.forEach(nt => notes.logNote(nt));
}else if(command === 'read'){
  var note = notes.readNote(argv.title);
  if(note){
    notes.logNote(note);
  }else{
    console.log(`Note does not exist`);
  }
}else if(command === 'remove'){
  var removed = notes.removeNote(argv.title);
  var message = removed ? "Note was removed" : "No such note!"
  console.log(message);
}else{
  console.log('command not recognized');
}

const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
//All Node Files have thier own scope 

//Customoize yargs verison 
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }, body:{
            describe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        getNotes.addNote(argv.title,argv.body)
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a node',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
                }
        },
    handler: function(argv) {
        getNotes.removeNotes(argv.title)
    }
})

// Create list command 
yargs.command({
    command: 'list',
    describe: 'lists the nodes',
    handler: function() {
        console.log('listing the nodes')
    }
})

// Create read command 
yargs.command({
    command: 'read',
    describe: 'reading the nodes',
    handler: function() {
        console.log('reading the nodes')
    }
})

yargs.parse()

//console.log(yargs.argv)
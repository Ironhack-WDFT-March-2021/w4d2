// console.log('hello node 🙃');
// execute the file : $ node <name of the file>
// the document object is not available in node
// but the global object is
// console.log(global);

// process represents the current running node process
// console.log(process.platform)

const chalk = require('chalk');

// this is a node internal package, called module, it needs to be required but not
// installed via npm install crypto
const crypto = require('crypto');

const randomString = crypto.randomBytes(64).toString('Hex');
// console.log(randomString);

// console.log(chalk.blue('Hello world!'));

const add = require('./add');
const result = add(3, 7);
// console.log(chalk.red(result));


// require the functions from functions.js
// this requires the whole object

// const functions = require('./functions');
// console.log(functions.goodByeFunction())

const { greetFunction } = require('./functions')

// console.log(greetFunction())

// console.log(__filename);
// console.log(__dirname);

// accessing a variable that is passed in via the terminal
// $ node index.js foobar
// console.log('this is the parameter: ', process.argv.slice(2));


// https://github.com/sindresorhus/awesome-nodejs#weird

// create a project (folder)
// npm init
// npm install <weird package>
// use the package

const supervillains = require('supervillains');


const randomVillain = supervillains.random();
console.log(randomVillain);
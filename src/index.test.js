const greeter = require('./index.js');

console.log('Starting tests');

const resOne = greeter();
if(resOne !== 'Hello, User!'){
    throw new Error('Greeter not working with default argument!');
}

const resTwo = greeter('Lele');
if(resTwo !== 'Hello, Lele!'){
    throw new Error('Greeter is not working with name argument!');
}
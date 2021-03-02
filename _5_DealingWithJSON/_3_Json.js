//reading from a file
const fs = require('fs');

const dataBuffer = fs.readFileSync('data.json');
console.log(typeof dataBuffer);

console.log(dataBuffer.toString());

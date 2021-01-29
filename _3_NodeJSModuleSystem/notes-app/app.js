//file system
const fs = require('fs');

console.log("Before write operation");
fs.writeFileSync('temp.txt','Success is inevitable if I live in present');
console.log("After Write operation");
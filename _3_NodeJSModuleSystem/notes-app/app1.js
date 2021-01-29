//file system
//asinchronous
const fs = require('fs');

console.log("Before write operation");
fs.writeFile('temp.txt','Success is inevitable if I live in present',()=>{
    console.log("Writting completed")
});
console.log("After Write operation");
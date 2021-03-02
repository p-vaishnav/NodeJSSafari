
const fs = require('fs');
const dataBuffer = fs.readFileSync('info.json');

const tempObj = JSON.parse(dataBuffer.toString());
tempObj.name = "Vaishnav"
tempObj.age = "21";

fs.writeFileSync('info.json',JSON.stringify(tempObj));

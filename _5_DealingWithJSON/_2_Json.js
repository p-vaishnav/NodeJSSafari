//writing into a file
const fs = require('fs');
const book = {
    author:"Robin Sharma",
    title:"Monk who sold his ferrari"
}

const JSONData = JSON.stringify(book);
fs.writeFileSync('data.json',JSONData);

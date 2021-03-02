const book = {
    author:"Robin Sharma",
    title:"Monk who sold his ferrari"
}

const JSONData = JSON.stringify(book);
console.log(JSONData);
const ActualJSON = JSON.parse(JSONData);
console.log(ActualJSON.author + ActualJSON.title);
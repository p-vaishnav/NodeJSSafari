console.log("Starting");
setTimeout(()=>{
    console.log("In callback of 2 seconds timer");
},2000);
setTimeout(()=>{
    console.log("In callback of 0 seconds timer");
},0);

console.log("Stoppping");
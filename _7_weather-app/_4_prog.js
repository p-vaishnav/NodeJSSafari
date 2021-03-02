console.log("Starting");
setTimeout(()=>{
    console.log("In callback of 2 seconds timer");
},2000);
setTimeout(()=>{
    console.log("In callback of 3 seconds timer");
},3000);
setTimeout(()=>{
    console.log("In callback of 0 seconds timer");
},0);
setTimeout(()=>{
    console.log("In callback of 1 seconds timer");
},1000);

console.log("Stoppping");

    
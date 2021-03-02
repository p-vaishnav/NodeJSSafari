console.log("Starting");
setTimeout(()=>{
    console.log("In callback of 2 seconds timer");
},2000);
setTimeout(()=>{
    console.log("In callback of 0 seconds timer");
},0);
for(let i=0;i<10000;i++){
    console.log("Stoppping");
}
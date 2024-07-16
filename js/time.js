
// steTimeOut => 1 time run 
console.log("hello indians");
setTimeout(()=>{
    console.log("congratulations indian criket tems");
},200);

setTimeout(() =>{
    console.log("T20 world cup win india")
}, 300)
console.log("best moment of all indians pepoles.....!");

//setTimeintarverl
let count = 0; 
let fun = setInterval(() => {
    count ++;
    console.log("GodL_Deep", count + 1);
}, 500);

// clearInterval
setTimeout(() =>{
    clearInterval(fun);
},5000);



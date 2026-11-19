//exp2
console.log("1. Program Started");


console.log("2. Synchronous Code");


setTimeout(() => {
    console.log("6. setTimeout() executed");
}, 0);


setImmediate(() => {

    console.log("7. setImmediate() executed");
});


process.nextTick(() => {
    console.log("4. process.nextTick() executed");
});


Promise.resolve().then(() => {
    console.log("5. Promise executed");
});

console.log("3. Program Ended");

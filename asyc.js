const fs = require('fs');

console.log("1");
console.log(fs.readFileSync('text.txt')); // reading syncronosly means really blocking thread
console.log("2");


console.log("1");
fs.readFile('text.txt', (err,data) => console.log("data",data.toString())); // it will print full buffer  by default you get buffer
console.log("2");


/**
 *  overall plan was to learn about readfile and readFileSync to be real nothing new as we have do understanding of js but still good as we are moving to BE
 */
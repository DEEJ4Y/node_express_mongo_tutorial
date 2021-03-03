const hello = require("./Hello");
const world = require("./World");

const helloWorld = hello() + world();

console.log(helloWorld);

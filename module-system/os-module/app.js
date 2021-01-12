const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

// Template String
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);
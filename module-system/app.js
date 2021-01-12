// Global Objects
//console.log();
//setTimeout();
//clearTimeout();
//setInterval();
//clearInterval();
//global.console.log();
//global.setTimeout();
var message = 'ghjh';

console.log(global.message);
console.log(module);

const logger = require('./logger');
// logger.log('message') if module.exports.log = log;
logger("Hello");
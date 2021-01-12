const EventEmitter = require('events').EventEmitter;

var url = 'https://github.com/xPlorinRolyPoly';

class Logger extends EventEmitter {
     log(message) {
        console.log(message);
        // Raise an event
        //emitter.emit('messageLogged', {id: 1, url: url});
        this.emit('messageLogged', {id: 1, url: url});
    }
}

//module.exports.log = log;
// exports.log = log;
module.exports = Logger;
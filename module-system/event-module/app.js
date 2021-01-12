const Logger = require('./logger');
const logger = new Logger();

// Register a listener
/*emitter.on('messageLogged', function (eArg) {
    console.log('Listener Called', eArg);
})*/

logger.on('messageLogged', (eArg) => {
    console.log('Listener Called', eArg);
})


logger.log('message');
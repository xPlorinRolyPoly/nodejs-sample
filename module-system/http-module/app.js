const { Socket } = require('dgram');
const http = require('http');

const server = http.createServer((req, resp) => {
    if(req.url === '/'){
        resp.write('Hello World');
        resp.end();
    }

    if(req.url === '/api/courses'){
        resp.write(JSON.stringify([1,2,3]));
        resp.end();
    }
});
/* server.on('connection', (socket) => {
    console.log('New Connection..')
}); */

server.listen(9000);
console.log('Listening on Port 9000...')
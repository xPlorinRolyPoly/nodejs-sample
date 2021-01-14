const express = require('express');
const morgan = require('morgan');
const config = require('config');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db')
const app = express();

app.use(express.json());

//console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
//console.log(`app: ${app.get('env')}`);

if (app.get('env')  === 'development') {
    app.use(morgan('combined'));
    startupDebugger('Morgan enabled...');
}

dbDebugger('Connected to Database...');

console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server Name: ${config.get('mail.host')}`);
console.log(`Mail Server Password: ${config.get('mail.password')}`);

app.get('/', (req, resp) => {
    resp.send('Hello World');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`)
})
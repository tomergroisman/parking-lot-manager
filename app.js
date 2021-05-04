const server = require('./server');

console.log(process.argv[2])

const port =  process.argv[2] || 3000;

server.start(port);
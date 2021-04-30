const express = require('express');
const router = require('../routes');

const app = express();
let server = {};

app.use('/', router.routes);

server.start = (port) => {
    server.app = app.listen(port, () => {
        console.log(`Server in up on port ${port}`);
    });
}

server.reset = () => {
    router.reset();
}

module.exports = server;
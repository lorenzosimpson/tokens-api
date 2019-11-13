const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./routers/apiRouter')

const server = express();
server.use(express.json());
server.use(helmet());

server.use('/api', apiRouter)

module.exports = server;
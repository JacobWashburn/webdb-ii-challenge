const express = require('express');
const helmet = require('helmet');
const apiRouter = require('./apiRouter')
const carsRouter = require('../routes/carsRouter');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/', apiRouter)
server.use('/api/cars', carsRouter)

module.exports = server;
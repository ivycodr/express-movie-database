const express = require('express')
const app = express();

// get a handle for all your routes
app.use(express.json());
const routes = require('./routes')

// Import my routes into the path '/'
app.use('/', routes);


module.exports = app;



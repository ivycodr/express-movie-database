// configures express, requires router
const router = require('./router.js');
const express = require('express');
const app = express();
const port = 3000;
app.use('/', router);
app.use(express.json());


module.exports = {
    port, app

}
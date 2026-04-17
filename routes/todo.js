const express = require('express')
const app = express();
const control = require('../controllers/control')

app.use('/v1',control);

module.exports = app;
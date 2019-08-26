const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/parking')
module.exports = app

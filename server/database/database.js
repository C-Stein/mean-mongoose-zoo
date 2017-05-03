'use strict'

const mongoose = require('mongoose');

const MONGODB_URL = `mongodb://zooguy:ilovezoos@ds159330.mlab.com:59330/mean-zoo`

mongoose.Promise = Promise;

module.exports.connect = () => mongoose.connect(MONGODB_URL)
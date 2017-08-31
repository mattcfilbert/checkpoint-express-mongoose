const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/authors_db', { useMongoClient: true })

module.exports = mongoose

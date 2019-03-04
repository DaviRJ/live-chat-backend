const mongoose = require('mongoose')

const connection_string = process.env.DB_CONNECTION;

mongoose.connect(connection_string, { 
    useNewUrlParser: true,
    'useFindAndModify': false,
    'useCreateIndex': true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
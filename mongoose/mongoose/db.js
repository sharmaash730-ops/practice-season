const mongoose = require('mongoose');

//define the mongodb connection Url
const mongoURL = 'mongodb://localhost:27017/hotel'

//set up mongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlparser: true,
    useUnifiedTopology: true
})
//Get the default connection 
//mongoose maintains a default connection object representing the mongoDB connection.
const db = mongoose.connection;
//define event listeners for database connection
db.on('conncted', () => {
    console.log('connected to mongoDB server');
})
db.on('conncted', () => {
    console.log('mongoDB connection server', err);
})
db.on('disconncted', () => {
    console.log('MongoDB disconnected');
})
//export the database connection
module.exports = db;
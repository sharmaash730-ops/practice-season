const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/hotel')
    .then(() => console.log('***connected***'))
    .catch(error => handleError(error.message));


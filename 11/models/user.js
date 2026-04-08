
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        Enumerator: ["chef", "waiter", "staff"],
    },
    addess: {
        type: String
    },
    mobile_no: {
        type: Number
    }
});
module.exports = mongoose.model('ashish2', userSchema);
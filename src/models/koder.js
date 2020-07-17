const mongoose = require('mongoose');

//Define models
const koderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 2,
    },
    gender: {
        type: String,
        required: true,
        enum: [
            'male',
            'female',
            'nobinary',
        ],
    },
    hobbies: {
        type: String,
    }
})

const koderModel = mongoose.model('koder', koderSchema)

module.exports = koderModel
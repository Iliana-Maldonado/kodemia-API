const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://malibily:kodemia1234@cluster0.xygif.mongodb.net/kodemia',{
        userNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connect
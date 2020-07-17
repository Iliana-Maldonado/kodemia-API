const express = require('express');

const kodersRouters = require('./routers/koders')

const app = express();

// http://localhost:9876

app.get('/', (req, res) => {
    res.json({
        success:true,
        message: "Kodemia APIv8"
    })
})

//http://localhost:9876/koders/
app.use('/koders', kodersRouters)

module.exports = app
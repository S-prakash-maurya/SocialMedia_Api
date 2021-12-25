const mongoose = require('mongoose');
const database = process.env.DATABASE
mongoose.connect(database,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error) => {
        if (!error) {
            console.log("connection Established");
        } else {
            console.log("failed-----")
        }
    })
const { request, response } = require('express');
const express = require('express');
const dotenv = require('dotenv');
const res = require('express/lib/response');
const app = express();
dotenv.config({ path: './.env' });
const port = process.env.PORT
// const port = process.env.PORT || 4500
const database = require('./Connection');
const students = require('./student');
const helmet = require('helmet');
const morgan = require('morgan');



// Router
app.use('/students', students);


// Middelware
app.use(express.json());
app.use(helmet())
app.use(morgan('common'));

app.get('/', (req, res) => {
    res.send("This is home page ");
});

// Server start with speciphc port 

app.listen(port, (req, res, err) => {
    if (!err) {
        console.log(`server is run on http://localhost:${port}`);
    } else
        console.log(`server error`);
})
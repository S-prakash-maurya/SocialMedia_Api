const express = require('express');
const Student = require('./Model');
const bodyparser = require('body-parser');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bycrpt = require('bcrypt')
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { Router } = require('express');

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.all('/', (req, res) => {
    return res.json({
        status: true,
        message: "user router is working"
    });
});

// Add posts Router

router.post('/add', async (req, res) => {

    try {
        const hashpassword = bycrpt.hashSync(req.body.password, 10);

        const students = new Student({
            username: req.body.username,
            email: req.body.email,
            password: hashpassword
        });

        const d = await students.save();
        res.status(200).json(d);
    } catch (error) {
        res.status(500).json(error);
    }
});


// Find or Fatch post Router

router.post('/login', async (req, res) => {
    try {
        const student = await Student.findOne({ email: req.body.email });
        !student && res.status(404).json({ message: "user not found" });

        const passValid = await bycrpt.compare(req.body.password, student.password);
        !passValid && res.status(404).json({ message: " password not match" });
        
        res.status(200).json(student);
        
        console.log(student)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router
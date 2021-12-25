const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema({
    username: {
        type: String,
        min: 5,
        max: 20,
        required: true
    },
    email: {
        type: String,
        unique: true,
        max: 50,
        required: true
    },
    password: {
        type: String,
        require: true,
        minlength: 4,
        maxlenght: 20
    },
    profilePicture: {
        type: String,
        default: ""
    }
    ,
    coverPicturec: {
        type: String,
        default: ""
    }
    ,
    // followers: {
    //     type: String,
    //     default: []
    // },
    // followings: {
    //     type: String,
    //     default: []
    // }
    // ,
    isActive: {
        type: Boolean,
        default: true
    },
    createOn: {
        type: Date,
        default: Date.now()
    }
});
const data = new mongoose.model('students', mongooseSchema);
module.exports = data

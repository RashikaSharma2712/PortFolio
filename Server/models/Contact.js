const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    email:{
        type:String,
        required:true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    message:{
        type:String,
        required:true,
        trim: true,
        minlength: 10,
        maxlength: 1000
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Contact",contactSchema);
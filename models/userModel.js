const mongoose = require("mongoose");
// const { title } = require("process");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    age:{  
        type: Number,
        required: true,
    },
   
    updatedAt: {
        type: Date,
        default: new Date(),
    },
    
})

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
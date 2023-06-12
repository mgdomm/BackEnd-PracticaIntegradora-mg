const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        require: true 
    },
    
});

const user = mongoose.model('user', userSchema)

module.export = user;

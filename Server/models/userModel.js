const  mongoose  = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type: String, require},
    email: {type: String, require},
    password: {type: String, require},
    isAdmin: {type: String, require, default: false},
}, {
    timestamps: true
});

module.exports = mongoose.model('users', userSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Your profile requires a username"],
    },
    biotext: {
        type: String,
        required: [true, "Your profile requires a bio"],
    },
    email: {
        type: String,
        required: [true, "Your profile requires an email address"],
    },
    phonenumber: {
        type: String,
        required: [true, "Your profile requires a phone number"],
    },
    password: {
        type: String,
        required: [true, "Create a strong password to protect your profile"],
    },
})

const userAccount = mongoose.model("userAccount", userSchema);
module.exports = userAccount;

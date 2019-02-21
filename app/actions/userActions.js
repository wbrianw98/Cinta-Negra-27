const User = require("../models/User");

const createUser = (data) => {
    return User.create(data);
}

const getUserByEmail = (email) => {
    return User.findOne({email:email})
}

module.exports = {
    createUser, 
    getUserByEmail
}
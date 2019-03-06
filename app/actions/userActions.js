const User = require("../models/User");

const createUser = (data) => {
    return User.create(data);
}

const getUserByEmail = (email) => {
    return User.findOne({email:email})
}

const getUserById = (id) => {
    return User.findOne({_id: id, is_active: true}).select("-password").populate("posts");
}

const getAllUsers = () => {
    return User.find({is_active:true}).select("-password").populate("posts");
}

const deleteUserById = (id) => {
    return User.findByIdAndUpdate({_id:id, is_active:true}, {$set:{is_active:false}}, {new:true} )
}

const updateUserById = (id, data) => {
    return hashPassword(data.password, SALT_FACTOR)
        .then(hash => {
            data.password = hash
            return User.findByIdAndUpdate(id, {$set: data}, {new: true}).select("-password")
        })
        .catch(e => e)
}

module.exports ={
    createUser,
    getUserByEmail,    
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
}
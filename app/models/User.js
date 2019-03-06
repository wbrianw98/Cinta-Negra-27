const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_FACTOR = 11;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    birth_date:{
        type:Date
    },
    gender:{
        type:String,
        enum: ["Male", "Female"]
    },
    subscription:{
        type:String,
        enum:["BASIC", "GOLD", "PREMIUM"]
    },
    profile_image:{
        type: String
    },
    is_active:{
        type: Boolean,
        default: true
    }
}, {"colection": "users", "timestamps": true});

UserSchema.pre("save", function(next){
    let user = this;
    if(!user.isModified("password")) {return next();}
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });
});

mongoose.Types.ObjectId.prototype.valueOf = function(){
    return this.toString()
}

module.exports = mongoose.model("users", UserSchema)
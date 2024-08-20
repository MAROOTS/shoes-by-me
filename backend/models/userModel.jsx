import mongoose from "mongoose";
const bcrypt = require('bcryptjs');
const userSchema= new mongoose.Schema({
    name:{type:String,required: true},
    email:{type:String,required: true},
    password:{type:String,required: true},
    isVerified:{type:Boolean,default:false},
    verificationToken:{type:String},
});

//hash password b4 saving
userSchema.pre('save', async function(next){
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const User = mongoose.model('User',userSchema);
module.exports = User;
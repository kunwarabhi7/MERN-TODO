import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{type:"string",required:true,unique:true},
    password:{type:"string",required:true},
    fullName:{type:"string",required:true},
    gender:{type:"string",required:true},
    profilePic:{type:"string",default:""}
},{timestamps:true});

export default mongoose.model("User",userSchema);
import UserModel from "../models/User.model.js";

export const authController =async(req,res) =>{
    res.send("auth controller niiii")
}

export const registerController = async(req,res) =>{
    const {fullName,email,password,gender} = req.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!fullName ||!email ||!password ||!gender){
        return res.status(400).json({message:"Please fill all the fields"});
    }
    if(!emailRegex.test(email)){
        return res.status(400).json({message:"Please enter a valid email address"});
    }
    if(password.length<6){
        return res.status(400).json({message:"Password must be at least 6 characters long"});
    }
    if(gender!="Male" && gender!="Female"){
        return res.status(400).json({message:"Please select a valid gender"});
    }
    // check if user already exists
    const user = await UserModel.findOne({email});
    if(user){
        return res.status(400).json({message:"User already exists with this email"});
    }
    const newUser = new UserModel({fullName,email,password,gender});
    await newUser.save();
    res.status(201).json({message:"User registered successfully"});
}
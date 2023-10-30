import { error, log } from "console";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";
//login user
const userLogin = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email:email});
    if(user){
        const pass = await bcrypt.compare(req.body.password, user.password);
        if(pass){

           generateToken(res,user._id);
            res.json(
                {
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    isAdmin:user.isAdmin
                }
            )
        }
        else{
            res.status(400).json({"error":"Authentication Failed"});
        }
       
       
    }
   
})

//register user

const regUser = asyncHandler(async(req,res)=>{
    
    let {name,email,password} = req.body;
     
    //lets hash the password in bcrypt form
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password,salt);
    
    const UserExist = await User.findOne({email});
    if(UserExist){
        res.status(401).json({message:"user alreday exist"})
    }
    else{
        const user = await User.create({
            name,email,password
        })
        if(user){

            generateToken(res,user._id);

            res.status(200).json({
                id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin
            })
        }
    }
   
   
    
})


//logout user
const logoutUser = asyncHandler(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)

    })
    res.status(200).json({message:"logged out scuccesfully"})
})


//get user profile
const getUserProfile = asyncHandler(async(req,res)=>{
    //const id = 
    const user = await User.findById(req.user._id);
    if(user){
        res.status(200).json({
            _id :user._id,
            name:user.name,
            email:user.email
        })
    }
    else{
        res.status(400).json({error:"did not found"});
    }
})
//update user profile
const updateUserProfile = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id);
    if(user){
        user.name = req.body.name ||user.name;
        user.email = req.body.email ||user.email ;

        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password,salt);

            user.password = password ||user.password;
        }
        const updatedUser = await user.save();
        res.status(200).json(
            {
            _id:updatedUser._id,
            name :updatedUser.name,
            email :updatedUser.email,
            isAdmin:updatedUser.isAdmin

        })
    }
})
//get users
const getUsers = asyncHandler(async(req,res)=>{
    res.send("get users")
})
//delete users
const deleteUser = asyncHandler(async(req,res)=>{
    res.send("delelte users")
})
//get users by id
const getUserById = asyncHandler(async(req,res)=>{
    res.send("get user by id")
})
//update users
const updateUser = asyncHandler(async(req,res)=>{
    res.send("update User")
})


export {userLogin,regUser,logoutUser,getUserProfile,
    updateUserProfile,getUsers,
    deleteUser,getUserById,
    updateUser
};
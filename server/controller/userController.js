import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js"
const userLogin = asyncHandler(async(req,res)=>{
   res.send("logged in user")
})

//register user

const regUser = asyncHandler(async(req,res)=>{
    res.send("user registered");
})


//logout user
const logoutUser = asyncHandler(async(req,res)=>{
    res.send("logged out")
})


//get user profile
const getUserProfile = asyncHandler(async(req,res)=>{
    res.send("User profile")
})
//update user profile
const updateUserProfile = asyncHandler(async(req,res)=>{
    res.send("update user profile")
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
const deleteUserById = asyncHandler(async(req,res)=>{
    res.send("delete user by id")
})
//update users
const updateUser = asyncHandler(async(req,res)=>{
    res.send("update User")
})


export {userLogin,regUser,logoutUser,getUserProfile,
    updateUserProfile,getUsers,
    deleteUser,deleteUserById,
    updateUser
};
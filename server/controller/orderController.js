import asyncHandler from "../middleware/asyncHandler.js";
import Order from '../models/orderModel.js'

//to get all the products
const addOrderItems = asyncHandler(async(req,res)=>{
    res.send("add order items")
    
})
const getMyOrders = asyncHandler(async(req,res)=>{
    res.send("get my orders")
    
})
const getOrderById = asyncHandler(async(req,res)=>{
    res.send("Get my order by id")
    
})
const upadateOrderToPaid = asyncHandler(async(req,res)=>{
    res.send("update order to be paid")
    
})
const updateOrderToBeDelivered = asyncHandler(async(req,res)=>{
    res.send("update order to be delievered")
    
})
const getOrders = asyncHandler(async(req,res)=>{
    res.send("get all orders")
    
})

export {
    addOrderItems,getMyOrders,getOrderById,
    updateOrderToBeDelivered,upadateOrderToPaid,
    getOrders
}
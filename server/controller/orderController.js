import { create } from "domain";
import asyncHandler from "../middleware/asyncHandler.js";
import Order from '../models/orderModel.js'

//to get all the products
const addOrderItems = asyncHandler(async(req,res)=>{
   const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxprice,
    shippingPrice,
    totalPrice
   } = req.body

   if(orderItems || orderItems.length===0){
    res.status(400).json("NO ordered item")
   }
   else{
    const order = new Order({
        user :req.user._id,
        orderItems: orderItems.map((x)=>({
            ...x,
            product:x._id,
            _id:undefined,
        })),
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxprice,
        shippingPrice,
        totalPrice

    })

    const createOrder = await order.save();
    res.status(201).json(createOrder)
   }
})
const getMyOrders = asyncHandler(async(req,res)=>{
    const orders = await Order.find({user:req.user._id})
    res.status(200).json(orders)
    
})
const getOrderById = asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id).populate('user','name','email');
    if(order){
        res.status(200).json(order);
    }
    else{
        res.status(401).json("order not found")
    }

    
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
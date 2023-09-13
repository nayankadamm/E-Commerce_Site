import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//to get all the products
const getProducts = asyncHandler(async(req,res)=>{
    const products = await Product.find({});
        if(products){
            res.json(products);
        }
        else{
            res.status(400);
        }
})

// to get one product by ID
const getOneProduct = asyncHandler(async(req,res)=>{
    let product = await Product.findById(req.params.id)
    if(product){
        res.json(product);
    }
    else{
        res.status(404);
        throw new Error("Product Not Found");
    }
  
})

export {getProducts,getOneProduct};
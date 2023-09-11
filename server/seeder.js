import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import users from "./data/user.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import product from "./models/productModel.js";
import order from "./models/orderModel.js";
import connectDB from "./config/db.js";
connectDB();
const importData =async()=>{
    try {
        await order.deleteMany();
        await product.deleteMany();
        await User.deleteMany();
        const createUsers = await User.insertMany(users);


        const adminUser = createUsers[0]._id;

        const sampleProducts = products.map((products)=>{
            return {...products,user:adminUser};

        })
        await product.insertMany(sampleProducts);
        console.log("Data Imported!!gffff".green.inverse);
        process.exit();
        

    } catch (error) {
        console.error(`${error}`.red.inverse);
    }
}

const destroyData = async()=>{
    try {
        
        await order.deleteMany();
        await product.deleteMany();
        await User.deleteMany();
        console.log("Data Destroyed!!".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
    }
}
;
if(process.argv[2] === '-d')
{
    destroyData();
  }
    else{
        importData();
    };
 
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
import connectDB from './config/db.js';
connectDB();//conected mongooose

import products from './data/products.js';
import { log } from 'console';

app.get("/",(req,res)=>{
    res.send("API is running");
});
app.get("/api/products",(req,res)=>{
    res.json(products);
}
);
app.get("/api/products/:id",(req,res)=>{
    const product = products.find((p)=> p._id===req.params.id)
    res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

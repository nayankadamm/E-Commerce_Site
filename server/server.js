import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT;
import connectDB from './config/db.js';
connectDB();//conected mongooose
import {notFound,errorHandler} from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"


app.use('/',productRoutes);
app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



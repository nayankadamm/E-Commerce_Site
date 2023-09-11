import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
import connectDB from './config/db.js';
connectDB();//conected mongooose
import {notFound,errorHandler} from './middleware/errorMiddleware.js';
import router from './routes/productRoutes.js';

app.use('/',router);
app.use('/api/products',router);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



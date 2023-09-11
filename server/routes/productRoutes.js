import express from 'express';
const router = express.Router();
import { getProducts,getOneProduct } from '../controller/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getOneProduct);

export default router;
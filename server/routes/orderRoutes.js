import express from 'express';
const router = express.Router();
import {
    addOrderItems,getMyOrders,getOrderById,
    updateOrderToBeDelivered,upadateOrderToPaid,
    getOrders
} from "../controller/orderController.js"

import { protect,admin } from '../middleware/authmiddleware.js';

router.route("/").post(protect,addOrderItems).get(protect,admin,getOrders)
router.route('/mine').get(protect,getMyOrders)
router.route('/:id').get(protect,admin,getOrderById)
router.route('/:id/pay').put(protect,upadateOrderToPaid)
router.route('/:id/deliver').put(protect,admin,updateOrderToBeDelivered)





export default router;
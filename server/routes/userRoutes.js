import express from 'express';
const router = express.Router();
import {userLogin,getUserProfile,getUsers,updateUser,updateUserProfile,
    deleteUser,getUserById,regUser,logoutUser

} from '../controller/userController.js';

import { protect,admin } from '../middleware/authmiddleware.js';

router.route("/").post(regUser).get(protect,admin,getUsers)

router.post('/logout',logoutUser);
router.post('/login',userLogin);;
router.route("/profile").get(protect,getUserProfile).put(protect,updateUserProfile);
router.route("/:id").delete(protect,admin,deleteUser).get(protect,admin,getUserById)
.put(protect,admin,updateUser)




export default router;
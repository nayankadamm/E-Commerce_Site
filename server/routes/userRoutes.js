import express from 'express';
const router = express.Router();
import {userLogin,getUserProfile,getUsers,updateUser,updateUserProfile,
    deleteUser,deleteUserById,regUser,logoutUser

} from '../controller/userController.js';

router.route("/").post(regUser).get(getUsers)
////
router.post('/logout',logoutUser);
router.post('/login',userLogin);;
router.route("/profile").post(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(deleteUserById).put(updateUser)




export default router;
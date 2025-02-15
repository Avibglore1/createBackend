import express from 'express';
import { registerUser, verifyUser, loginUser, myProfile, forgotPassword, resetPassword, getAllusers, deleteOneUser,updateRole } from
 '../controllers/user.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/verify', verifyUser);
router.post('/login', loginUser);
router.get("/profile", isAuth, myProfile);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('./getAll',isAuth, getAllusers);
router.delete('./user/:userId', isAuth, deleteOneUser);
router.put("/user/:id/role", isAuth, updateRole);
export default router;

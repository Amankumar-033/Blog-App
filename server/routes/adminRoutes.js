import express from 'express'
import { adminLogin, approveCommentbyId, deleteCommentbyId, getAllblogsAdmin, getAllcommentsadmin, getDashBoard } from '../controllers/adminController.js';
import auth from '../middlewares/auth.js';


const adminRouter = express.Router();

adminRouter.post("/login", adminLogin)
adminRouter.get("/comments", auth, getAllcommentsadmin)
adminRouter.get("/blogs", auth, getAllblogsAdmin)
adminRouter.get("/dashboard", auth, getDashBoard)
adminRouter.post("/delete-comment", auth, deleteCommentbyId)
adminRouter.post("/approve-comment", auth, approveCommentbyId)




export default adminRouter;

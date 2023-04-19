import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello, you are now logged in!")
// })

// router.get("/checkuser/:id",verifyUser, (req, res, next) => {
//     res.send("hello, you are now logged in! You can now delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are now logged in! You can now delete all accounts")
// })

// Update
router.put('/:id',verifyUser, updateUser)

// delete
router.delete('/:id',verifyUser,deleteUser)

// GET
router.get('/:id',verifyUser, getUser)

//get all
router.get('/',verifyAdmin, getUsers)



export default router;
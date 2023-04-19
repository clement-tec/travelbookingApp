import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

// create
router.post('/',verifyAdmin, createHotel);
// Update
router.put('/:id',verifyAdmin, updateHotel)
// delete
router.delete('/:id',verifyAdmin ,deleteHotel)
// GET
router.get('/:id', getHotel)
//get all
router.get('/', getHotels)



export default router;
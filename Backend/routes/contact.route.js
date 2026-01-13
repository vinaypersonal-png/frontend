import express, { Router } from "express";
import { getContact, addContact } from "../controllers/contact.controller.js";
const router = express.Router();

router.get("/get-contact", getContact); // only admin can see.
router.post("/add-contact", addContact); // form se data aayega from user.

export default router;
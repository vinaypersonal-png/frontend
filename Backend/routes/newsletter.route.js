import express, { Router } from "express";
import {getNewsletter, addNewsletter } from "../controllers/newsletter.controller.js"

const router = express.Router();

router.get("/get-subscribe", getNewsletter);
router.post("/add-subscribe", addNewsletter);

export default router;
import express, { Router } from "express";
import { getClient, addClient } from "../controllers/client.controller.js";

const router = express.Router();

router.get("/get-client", getClient);
router.post("/add-client", addClient);

export default router;
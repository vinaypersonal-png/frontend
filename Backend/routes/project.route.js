import express, { Router } from "express";
import { getProject, addProjects } from "../controllers/project.controller.js";

const router = express.Router();

router.get("/get-project", getProject);
router.post("/add-project", addProjects);

export default router;
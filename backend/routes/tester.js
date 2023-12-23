import express from "express";
import { easterEgg } from "../controllers/easterEgg.js";

const router = express.Router();

router.get("/easterEgg", easterEgg);

export default router;
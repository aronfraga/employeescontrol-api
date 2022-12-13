import { Router } from "express";
import { clockAction, showAllSchedule, showSpecificSchedule } from "../controllers/schedule";

const router = Router();

router.get("/", showAllSchedule);
router.get("/", showSpecificSchedule);
router.post("/", clockAction);

export { router };
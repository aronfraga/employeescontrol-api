import { Router } from "express";
import { setEndToWork, setStartToWork, showAllSchedule, showSpecificSchedule } from "../controllers/schedule";

const router = Router();

router.get("/", showAllSchedule);
router.get("/", showSpecificSchedule);
router.post("/", setStartToWork);
router.post("/", setEndToWork);

export { router };
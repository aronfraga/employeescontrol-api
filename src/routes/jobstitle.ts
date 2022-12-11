import { Router } from "express";
import { getJobsTitle, postJobsTitle, updateJobsTitle, deleteJobsTitle } from "../controllers/jobstitle";

const router = Router();

router.get("/", getJobsTitle);
router.post("/", postJobsTitle);
router.put("/:id", updateJobsTitle);
router.delete("/:id", deleteJobsTitle);

export { router }
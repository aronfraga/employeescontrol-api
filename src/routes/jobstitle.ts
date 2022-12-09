import { Router, Request, Response } from "express";
import { postJobsTitle } from "../controllers/jobstitle";

const router = Router();

//router.get("/", getJobsTitle);
router.post("/", postJobsTitle);
//router.put("/", updateJobsTitle);
//router.delete("/", deleteJobsTitle);

export { router }
import { Request, Response } from "express";
import { insertJobsTitle } from "../services/jobstitle";

const postJobsTitle = async (req: Request, res: Response) => {
  const response = await insertJobsTitle(req.body);
  res.send(response)
}

export { postJobsTitle };
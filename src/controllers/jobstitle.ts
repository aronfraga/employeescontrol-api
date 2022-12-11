import { Request, Response } from "express";
import { dropJobsTitle, insertJobsTitle, renewJobsTitle, selectJobsTitle } from "../services/jobstitle";
import { succesfulHandler } from "../utils/succesfulHandler";
import { unsuccesfulHandler } from "../utils/unsuccesfulHandler";

const getJobsTitle = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: object = await selectJobsTitle();
    succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const postJobsTitle = async ({ body }: Request, res: Response): Promise<void> => {
  try {
    const response: object = await insertJobsTitle(body);
    succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const updateJobsTitle = async ({ body, params }: Request, res: Response): Promise<void> => {
  try {
    const response: object = await renewJobsTitle(params.id, body);
    succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const deleteJobsTitle = async ({ params }: Request, res: Response): Promise<void> => {
  try {
    const response: object = await dropJobsTitle(params.id);
    succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

export { getJobsTitle, postJobsTitle, updateJobsTitle, deleteJobsTitle };
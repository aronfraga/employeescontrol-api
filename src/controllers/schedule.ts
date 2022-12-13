import { Request, Response } from "express";

import { succesfulHandler } from "../utils/succesfulHandler";
import { unsuccesfulHandler } from "../utils/unsuccesfulHandler";

const setStartToWork = async (req: Request, res: Response): Promise<void> => {
  try {
    //const response: object = 
    //succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const setEndToWork = async (req: Request, res: Response): Promise<void> => {
  try {
    //const response: object = 
    //succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const showAllSchedule = async (req: Request, res: Response): Promise<void> => {
  try {
    //const response: object = 
    //succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const showSpecificSchedule = async (req: Request, res: Response): Promise<void> => {
  try {
    //const response: object = 
    //succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

export { setStartToWork, setEndToWork, showAllSchedule, showSpecificSchedule };
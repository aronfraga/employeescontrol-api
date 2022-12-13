import { Request, Response } from "express";
import { endToWork, startToWork } from "../services/schedule";

import { succesfulHandler } from "../utils/succesfulHandler";
import { unsuccesfulHandler } from "../utils/unsuccesfulHandler";

const setStartToWork = async ({ body }: Request, res: Response): Promise<void> => {
  try {
    
    const response: object = await startToWork(body.start);
    succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const clockAction = async ({ body }: Request, res: Response): Promise<void> => {
  try {
    switch(body.clock) {
      case "start": 
        const responseStart: object = await startToWork(body.employee_id);
        succesfulHandler(res, responseStart);
        break;
      case "end":
        const responseEnd: object = await endToWork(body.employee_id);
        succesfulHandler(res, responseEnd);
        break;
      default: throw new Error("The clock action is invalid, try again...")
    }
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

export { clockAction, showAllSchedule, showSpecificSchedule };
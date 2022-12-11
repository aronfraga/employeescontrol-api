import { Response } from "express";

const unsuccesfulHandler = (res: Response, error: unknown): void => {
  if(error instanceof Error) {
    res.status(400);
    res.send({ 'request_status': 'unsuccessful', 'response': error.message });
  }
};

export { unsuccesfulHandler };
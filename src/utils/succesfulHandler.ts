import { Response } from "express";

const succesfulHandler = (res: Response, response: object) => {
  res.status(202);
  res.send({ 'request_status': 'successful', 'response': response });
};

export { succesfulHandler };
import { Request, Response } from "express";
import { insertEmployee, selectEmployee, selectEmployees, renewEmploye, dropEmployee } from "../services/employee";
import { succesfulHandler } from "../utils/succesfulHandler";
import { unsuccesfulHandler } from "../utils/unsuccesfulHandler";

const welcome = async ({ params }: Request, res: Response): Promise<void> => {
  try { 
    const response: object = {
      Message: "Hello this is API About Control Employees, to see the documentation go to link -> https://github.com/aronfraga/employeescontrol-api/blob/main/README.md"
    };
    succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const getEmployee = async ({ params }: Request, res: Response): Promise<void> => {
  try { 
    const response: object = await selectEmployee(params.id);
    succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const getEmployees = async (req: Request, res: Response): Promise<void> => {
  try {
    succesfulHandler(res, await selectEmployees());
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const postEmployee = async ({ body }: Request, res: Response): Promise<void> => {
  try {
    const response: object = await insertEmployee(body);
    succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const updateEmployee = async ({ body, params }: Request, res: Response): Promise<void> => {
  try {
    const response: object = await renewEmploye(params.id, body);
    succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

const deleteEmployee = async ({ params }: Request, res: Response): Promise<void> => {
  try {
    const response: object = await dropEmployee(params.id);
    succesfulHandler(res, response);
  } catch (error: unknown) {
    unsuccesfulHandler(res, error);
  }
}

export { welcome, getEmployee, getEmployees, postEmployee, updateEmployee, deleteEmployee };
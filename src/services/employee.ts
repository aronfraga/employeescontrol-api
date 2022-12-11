import { IEmployee } from "../interfaces/employee.interface";
import employeeModel from "../models/employee";
import jobstitleModel from "../models/jobstitle";

const inputChecker = (employee: IEmployee): void => {
  if(!employee.employeeId || typeof employee.employeeId !== 'number') 
    throw new Error("The employee id can not be empty and must be a number...");
  if(!employee.firtsname || typeof employee.firtsname !== 'string') 
    throw new Error("The firtsname can not be empty and must be a string...");
  if(!employee.lastname || typeof employee.lastname !== 'string') 
    throw new Error("The lastname can not be empty and must be a string...");
  if(!employee.phoneNumber || typeof employee.phoneNumber !== 'number') 
    throw new Error("The phone number can not be empty and must be a number...");
  if(!employee.salary || typeof employee.salary !== 'number') 
    throw new Error("The salary can not be empty and must be a number...");
  if(!employee.jobsTitle || typeof employee.jobsTitle !== 'string') 
    throw new Error("The salary can not be empty and must be a string...");
  }

const insertEmployee = async (employee: IEmployee): Promise<IEmployee> => {
  inputChecker(employee);
  const checkEmployee: any = await employeeModel.findOne({ employeeId: employee.employeeId }); 
  if(!!checkEmployee) throw new Error("The employee is already in our system...");
  
  const checkJobsTitle: any = await jobstitleModel.findOne({ jobsTitle: employee.jobsTitle });
  if(!checkJobsTitle || checkJobsTitle === null) throw new Error("job title does not exist...");

  const cacheEmployee: IEmployee = {
    employeeId: employee.employeeId,
    firtsname: employee.firtsname,
    lastname: employee.lastname,
    phoneNumber: employee.phoneNumber,
    salary: employee.salary,
    jobsTitle: checkJobsTitle?._id,
  }
  const responseInsert: IEmployee = await employeeModel.create(cacheEmployee);
  return responseInsert;
};

const selectEmployees = async (): Promise<object> => {
  const response: object = await employeeModel.find({});
  return response;
}

const selectEmployee = async (id: string): Promise<object> => {
  const response: any = await employeeModel.findOne({ _id: id });
  if(response === null) throw new Error("The id doesn't match with any id in our database...");
  return response;
}

const renewEmploye = async (id: string, employee: IEmployee): Promise<object> => {
  inputChecker(employee);  
  const checkJobsTitle: any = await jobstitleModel.findOne({ jobsTitle: employee.jobsTitle });
  if(!checkJobsTitle || checkJobsTitle === null) throw new Error("job title does not exist...");

  const cacheEmployee: IEmployee = {
    employeeId: employee.employeeId,
    firtsname: employee.firtsname,
    lastname: employee.lastname,
    phoneNumber: employee.phoneNumber,
    salary: employee.salary,
    jobsTitle: checkJobsTitle?._id,
  }
  const response: any = await employeeModel.findOneAndUpdate({ _id: id }, cacheEmployee, { new: true });
  return response;
}

const dropEmployee = async (id: string): Promise<object> => {
  const response: any = await employeeModel.deleteOne({ _id: id });
  return response;
}

export { insertEmployee, selectEmployees, selectEmployee, renewEmploye, dropEmployee }


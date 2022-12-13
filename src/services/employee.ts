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
  const checkEmployee: IEmployee = await employeeModel.findOne({ employeeId: employee.employeeId }) as IEmployee; 
  if(!!checkEmployee) throw new Error("The employee is already in our system...");
  
  const checkJobsTitle: any = await jobstitleModel.findOne({ jobsTitle: employee.jobsTitle });
  if(!checkJobsTitle || checkJobsTitle === null) throw new Error("job title does not exist...");

  if(employee.salary < checkJobsTitle.minSalary || employee.salary > checkJobsTitle.maxSalary) {
    throw new Error(`The Salary range should be between ${checkJobsTitle.minSalary} and ${checkJobsTitle.maxSalary}`);
  }

  const cacheEmployee: IEmployee = {
    employeeId: employee.employeeId,
    firtsname: employee.firtsname,
    lastname: employee.lastname,
    phoneNumber: employee.phoneNumber,
    salary: employee.salary,
    onTime: 0,
    lateArrivals: 0,
    score: 0,
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

const renewEmploye = async (id: string, employee: IEmployee): Promise<IEmployee> => {
  inputChecker(employee);  
  const checkJobsTitle: any = await jobstitleModel.findOne({ jobsTitle: employee.jobsTitle });
  if(!checkJobsTitle || checkJobsTitle === null) throw new Error("job title does not exist...");

  const saveScore: IEmployee = await employeeModel.findOne({ _id: id }) as IEmployee;
  const cacheEmployee: IEmployee = {
    employeeId: employee.employeeId,
    firtsname: employee.firtsname,
    lastname: employee.lastname,
    phoneNumber: employee.phoneNumber,
    salary: employee.salary,
    onTime: saveScore.onTime,
    lateArrivals: saveScore.lateArrivals,
    score: saveScore.score,
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


import { IEmployee } from "../interfaces/employee.interface";
import { ISchedule } from "../interfaces/schedule.interface";
import employeeModel from "../models/employee";
import jobstitleModel from "../models/jobstitle";
import scheduleModel from "../models/schedule";

const startToWork = async (id: string): Promise<object> => {
  const checkSchedule: unknown = await scheduleModel.findOne({ emplyeeID: id }) as ISchedule;
  if(!!checkSchedule) throw new Error('The employee was registered...');
  const selectEmployee: any = await employeeModel.findOne({ _id: id }) as IEmployee;
  if(!!selectEmployee) throw new Error('The employee does not exist...');
  const checkHour: any = await jobstitleModel.findOne({ _id: selectEmployee.jobsTitle[0] });

  const employeeUpdated: IEmployee = {
    employeeId: selectEmployee.employeeID,
    firtsname: selectEmployee.firtsname,
    lastname: selectEmployee.lastname,
    phoneNumber: selectEmployee.phoneNumber,
    salary: selectEmployee.salary,
    onTime: selectEmployee.onTime,
    lateArrivals: selectEmployee.lateArrivals,
    score: selectEmployee.score,
    jobsTitle: selectEmployee.jobsTitle,
  }

  let date = new Date();
  if(date.getHours() > checkHour.startToWork) {
    employeeUpdated.lateArrivals = employeeUpdated.lateArrivals + 1;
    await employeeModel.findByIdAndUpdate({ _id: id }, employeeUpdated);
  } else {
    employeeUpdated.onTime = employeeUpdated.onTime + 1;
    await employeeModel.findByIdAndUpdate({ _id: id }, employeeUpdated);
  }
  
  const cacheSchedule: ISchedule = {
    employeeID: selectEmployee._id,
    entryTime: Date.now(),
    closingHour: 0,
  }

  const cacheResponse: object = await scheduleModel.create(cacheSchedule);
  const response:Array<object> = [ cacheResponse, employeeUpdated ];

  return response;
}

const endToWork = async (id: string): Promise<object> => {
  return {}
}

export { startToWork, endToWork }
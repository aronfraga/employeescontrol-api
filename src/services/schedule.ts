import { IEmployee } from "../interfaces/employee.interface";
import { ISchedule } from "../interfaces/schedule.interface";
import employeeModel from "../models/employee";
import jobstitleModel from "../models/jobstitle";
import scheduleModel from "../models/schedule";

const startToWork = async (id: string): Promise<object> => {
  const checkSchedule: any = await scheduleModel.findOne({ employeeId: id, done: false });
  const selectEmployee: any = await employeeModel.findOne({ _id: id }) as IEmployee;
  if(!!checkSchedule) throw new Error(`The employee ${selectEmployee.firtsname} ${selectEmployee.lastname} was already registered today...`);
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
  if(date.getHours() > checkHour.entToWork) throw new Error(`the employee ${employeeUpdated.lastname} is not authorized to work after hours...`);
  if(date.getHours() > checkHour.startToWork) { //here implement a warning if the employee get within in hour
    employeeUpdated.lateArrivals = employeeUpdated.lateArrivals + 1;
    await employeeModel.findByIdAndUpdate({ _id: id }, employeeUpdated);
  } else {
    employeeUpdated.onTime = employeeUpdated.onTime + 1;
    await employeeModel.findByIdAndUpdate({ _id: id }, employeeUpdated);
  }
  
  const cacheSchedule: ISchedule = {
    employeeId: selectEmployee._id,
    entryTime: Date.now(),
    closingHour: 0,
    done: false,
  }
  
  const cacheResponse: object = await scheduleModel.create(cacheSchedule);
  const response: Array<object> = [ cacheResponse, employeeUpdated ];
  return response;
}

const endToWork = async (id: string): Promise<object> => {
  const checkSchedule: any = await scheduleModel.findOne({ employeeId: id, done: false });
  const checkEmployee: any = await employeeModel.findOne({ _id: checkSchedule.employeeId })
  if(!checkSchedule) throw new Error(`The employee ${checkEmployee.firtsname} ${checkEmployee.lastname} is not registered to terminate...`);
  if(checkSchedule.done) throw new Error(`the working day for ${checkEmployee.firtsname} ${checkEmployee.lastname} has already ended`);

  const cacheSchedule: ISchedule = {
    employeeId: checkSchedule.employeeId,
    entryTime: checkSchedule.entryTime,
    closingHour: Date.now(),
    done: true,
  }
  
  const cacheResponse: object = await scheduleModel.findByIdAndUpdate({_id: checkSchedule._id }, cacheSchedule) as object;
  const response: Array<object> = [ cacheResponse, checkEmployee ];
  return response;
}

export { startToWork, endToWork }
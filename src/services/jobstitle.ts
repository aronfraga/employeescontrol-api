import { IJobstitle } from "../interfaces/jobstitle.interface"
import jobstitleModel from "../models/jobstitle";

const inputChecker = (jobstitle: IJobstitle): void => {
  if(!jobstitle.jobsTitle || typeof jobstitle.jobsTitle !== 'string') 
    throw new Error("The employee id can not be empty and must be a string...");
  if(!jobstitle.minSalary || typeof jobstitle.minSalary !== 'number') 
    throw new Error("The firtsname can not be empty and must be a number...");
  if(!jobstitle.minSalary || typeof jobstitle.minSalary !== 'number') 
    throw new Error("The lastname can not be empty and must be a number...");
  }

const insertJobsTitle = async (jobstitle: IJobstitle): Promise<IJobstitle> => {
  inputChecker(jobstitle);
  const checkJobsTitle:any = await jobstitleModel.findOne({ jobsTitle : jobstitle.jobsTitle });
  if(!!checkJobsTitle) throw new Error("The jobstitle is already in our system...");
  const responseInsert: IJobstitle = await jobstitleModel.create(jobstitle)
  return responseInsert;
};

const selectJobsTitle = async (): Promise<object> => {
  const response: object = await jobstitleModel.find({});
  return response;
}

const renewJobsTitle = async (id: string, jobstitle: IJobstitle): Promise<object> => {
  inputChecker(jobstitle);
  const checkJobsTitle: any = await jobstitleModel.findOne({ _id: id });
  if(!checkJobsTitle || checkJobsTitle === null) throw new Error("job title does not exist...");
  
  const cacheJobstitle: IJobstitle = {
    jobsTitle: jobstitle.jobsTitle,
    minSalary: jobstitle.minSalary,
    maxSalary: jobstitle.maxSalary
  }
  const response: any = await jobstitleModel.findOneAndUpdate({ _id: id }, cacheJobstitle);
  return response;
}

const dropJobsTitle = async (id: string): Promise<object> => {
  const response: any = await jobstitleModel.deleteOne({ _id: id });
  return response;
}

export{ insertJobsTitle, selectJobsTitle, renewJobsTitle, dropJobsTitle }
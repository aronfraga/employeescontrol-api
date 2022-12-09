import { Jobstitle } from "../interfaces/jobstitle.interface"
import jobstitleModel from "../models/jobstitle";

const insertJobsTitle = async (jobstitle: Jobstitle) => {
  console.log(jobstitle)
  const responseInsert = await jobstitleModel.create(jobstitle);
  return responseInsert;
};

export{ insertJobsTitle }
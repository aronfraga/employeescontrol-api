import { Schema, Types, model, Model } from "mongoose";
import { IJobstitle } from "../interfaces/jobstitle.interface";

const jobstitleSchema = new Schema<IJobstitle> (
  {
    jobsTitle: {
      type: String,
      required: true
    },
    minSalary: {
      type: Number,
      required: true
    },
    maxSalary: {
      type: Number,
      required: true
    },
    startToWork:{
      type: Number,
      required: true
    },
    entToWork:{
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const jobstitleModel = model('jobstitle', jobstitleSchema);
export default jobstitleModel;
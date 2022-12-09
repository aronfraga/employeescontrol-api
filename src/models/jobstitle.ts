import { Schema, Types, model, Model } from "mongoose";
import { Jobstitle } from "../interfaces/jobstitle.interface";

const jobstitleSchema = new Schema<Jobstitle>(
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
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const jobstitleModel = model('jobstitle', jobstitleSchema);
export default jobstitleModel;
import { Schema, Types, model, Model } from "mongoose";
import { IEmployee } from "../interfaces/employee.interface";

const employeeSchema = new Schema<IEmployee> (
  {
    employeeId: {
      type: Number,
      required: true
    },
    firtsname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    salary: {
      type: Number,
      required: true
    },
    jobsTitle: [{
      type: Types.ObjectId,
      ref: 'jobstitle',
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const employeeModel = model('employee', employeeSchema);
export default employeeModel;